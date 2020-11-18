
"""
python3.9

pip3 install -r detect_requirements.txt

"""

import argparse
import io
import os
import csv
# Imports the Google Cloud client library
from google.cloud import storage
from google.cloud import vision

from PIL import Image
import glob, os

INPUT_IMG_DIR="/Users/agni/git/SmartCaller/Face_ID/input_img/"
INPUT_VALIDATE_IMG_DIR="/Users/agni/git/SmartCaller/Face_ID/validate/"
OUTPUT_IMG_DIR="/Users/agni/git/SmartCaller/Face_ID/output/"


#########################################################################################
# 반드시 지울것!!

# API-KEY 등록.
# os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="./key.json"

#########################################################################################



# 버킷 이름
BUCKET_NAME = "smartcaller_bucket"
# 업로드할 파일
SOURCE_FILE_NAME = OUTPUT_IMG_DIR+"training.csv"
VALIDATE_FILE_NAME = OUTPUT_IMG_DIR+"validation.csv"
# 업로드 명 지정
DESTINATION_BLOB_NAME = "training.csv"
DESTINATION_BLOB_VALIDATE_NAME = "validation.csv"


def detect_faces(path):
    """Detects faces in an image."""
    client = vision.ImageAnnotatorClient()
    # [START migration_face_detection]
    # [START migration_image_file]
    with io.open(path, 'rb') as image_file:
        content = image_file.read()

    image = vision.Image(content=content)
    # [END migration_image_file]

    response = client.face_detection(image=image)
    faces = response.face_annotations

    # Names of likelihood from google.cloud.vision.enums
    likelihood_name = ('UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY')
    #print('Faces:')
    #print (faces)

    if not faces:
        print ("Face is not detected")
        return

    for face in faces:


        vertices = (['({},{})'.format(vertex.x, vertex.y)
                    for vertex in face.bounding_poly.vertices])

        #print('face bounds: {}'.format(','.join(vertices)))

    i = 0
    x_offsets = {}
    y_offsets = {}
    for vertex in face.bounding_poly.vertices:
        x_offsets[i] = vertex.x
        y_offsets[i] = vertex.y
        i += 1

    x_offset = x_offsets[0]
    y_offset = y_offsets[0]
    x2_offset = x_offsets[2]
    y2_offset = y_offsets[2]
    #(181,390),(308,390),(308,537),(181,537)
    #width = x_offsets[1] - x_offsets[0]
    #height = y_offsets[3] - y_offsets[0]
    return x_offset, y_offset, x2_offset, y2_offset
    #return x_offset, y_offset, width, height



def crop_image(path):
    for infile in glob.glob('{0}/*.jpg'.format(path)):
        output_image_path = OUTPUT_IMG_DIR
        output_image = infile.split('/')
        output_image_path += output_image[-1]
        x, y, x2, y2 = detect_faces(infile)
        im = Image.open(infile)
        box = (x, y, x2, y2)
        cropped_image = im.crop(box)
        print(output_image_path)
        cropped_image.save(output_image_path)
        print('complete')


def detect_faces_uri(uri):
    """Detects faces in the file located in Google Cloud Storage or the web."""
    client = vision.ImageAnnotatorClient()
    # [START migration_image_uri]
    image = vision.types.Image()
    image.source.image_uri = uri
    # [END migration_image_uri]

    response = client.face_detection(image=image)
    faces = response.face_annotations

    # Names of likelihood from google.cloud.vision.enums
    likelihood_name = ('UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE',
                       'LIKELY', 'VERY_LIKELY')
    print('Faces:')


def checking_crop_image(past_walk, path, istrain):
    now_walk = (os.walk(path).__next__()[2])
    if past_walk != now_walk:
        print('confirm crop image')
        if istrain == True:
            text = open(path+"training.csv",'w')
        else:
            text = open(path+"validation.csv",'w')
        wr = csv.writer(text)
        for i in now_walk:
            # data = (str(i)+',first,'+'0\n')
            wr.writerow([str(i), 'first', 0])
        text.close()

        # Add to Auto learning code

        for i in now_walk:
            if ".jpg" in i:
                print("Delet the iamge on " + path + i)
                os.remove(path+i)
        
        return 1
    return 0

def upload_blob(bucket_name, source_file_name, destination_blob_name):

    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    blob.upload_from_filename(source_file_name)

    print(
        "File {} uploaded to {}.".format(
            source_file_name, destination_blob_name
        )
    )

if __name__ == '__main__':
    
    while True:
        past_walk = (os.walk(OUTPUT_IMG_DIR).__next__()[2])
        
        # Add code to take a camera

        print('checking to crop learn image')
        crop_image(INPUT_IMG_DIR)

        #csv 파일로 만들고,
        if(checking_crop_image(past_walk,OUTPUT_IMG_DIR,True)):
            # 버킷에 업로드
            upload_blob(BUCKET_NAME, SOURCE_FILE_NAME, DESTINATION_BLOB_NAME)


        print('checking to crop validate image')
        # validation data
        crop_image(INPUT_VALIDATE_IMG_DIR)
        
        if(checking_crop_image(past_walk,OUTPUT_IMG_DIR,False)):
            # 버킷에 업로드DESTINATION_BLOB_NAME
            upload_blob(BUCKET_NAME, VALIDATE_FILE_NAME, DESTINATION_BLOB_VALIDATE_NAME)
            break

        