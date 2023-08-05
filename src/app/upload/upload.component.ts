import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFile!: File;
  resMessage: any="";
  imageName: any;
  name:string="";
  brand:string="";
  price:string="";
  discount:string="";
  size:string="";
  clothtype:string="";


  constructor(private http:HttpClient){}
  ngOnInit(){
    this.selectedFile={} as any;
  }

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }


  prdSubmitt(){
    
    const uploadImageData = new FormData();

    uploadImageData.append('dietFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append("name",this.name);
    uploadImageData.append("brand",this.brand);
    uploadImageData.append("price",this.price);
    uploadImageData.append("discount",this.discount);
    uploadImageData.append("size",this.size);
    uploadImageData.append("clothtype",this.clothtype);
    
    

    let res =this.http.post("http://localhost:1234/dress/add",uploadImageData,
    {responseType:'text' as 'json'});
    res.subscribe(
      data=>{
        this.resMessage = data;
        console.log(data);
        this.name="";
        this.brand="";
        this.price="";
        this.discount="";
        this.size="";
        this.clothtype="";
        
      }
    );

  }

}