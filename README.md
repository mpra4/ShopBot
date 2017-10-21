# Tesseract Conversion from PDF's to HOCR . 


This bash script shows how to speed up tessearact in converting pdf documents to hocr format using gnu parallel.

### Requirements

The minimum prerequisites to run this sample are:
* Gnu parallel. To run the tesseract on multiple cores
* Imagemagic. To convert the pdf document to tiff image.
* Tesseract. To perform the conversion from tiff image to hocr format.

The simplest way to install the requirements are as follows: 
````Terminal
sudo apt-get install parallel
sudo apt-get install imagemagick
sudo apt-get install tesseract-ocr
````
### Create the following folders

* sample_pdfs.     The directory having the pdf files 
* tiff_folder.     The directory for storing the tiff files generated.
* output_folder.   The directory for storing the output files.

### Example (running on 2 cores)
````
./pdfToHocr.sh /mnt/sample_pdfs/ /mnt/tiff_folder/ /mnt/output_folder/ 2
````
### To view core utilization
````
sudo apt-get install htop
````

![Alt text](/relative/path/to/img.jpg?raw=true "Optional Title")

