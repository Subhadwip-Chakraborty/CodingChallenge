// import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { EnrollementService } from './enrollement.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
 
 constructor(private fb:FormBuilder,private es:EnrollementService) {}

 register:any=this.fb.group({
  ch1:[''],
  ch2:[''],
  ch3:[''],
  ch4:[''],
  ch5:[''],
  ch6:[''],
  h1:[''],
  h2:[''],
  h3:[''],
  h4:[''],
  h5:[''],
  h6:[''],
  h7:[''],
  h8:[''],
  h9:[''],
  h10:[''],
  h11:[''],
  h12:[''],
  firstName:['',Validators.required],
  lastName:['',Validators.required],
  areaCode:['',Validators.required],
  phoneNumber:['',Validators.required],
  email:['',[Validators.required,Validators.email]],
  street:['',Validators.required],
  street2:['',Validators.required],
  city:['',Validators.required],
  state:['',Validators.required],
  occupation:['',Validators.required],
  companyName:['',Validators.required],
  job:['',Validators.required],
  m1:[''],
  m2:[''],
  m3:[''],
  m4:[''],
  m5:[''],
  m6:[''],
  comment:[''],
  l1:[''],
  l2:[''],
  l3:[''],
  l4:[''],
  l5:[''],
  l6:[''],
  



})
  get ch1(){
    return this.register.get('ch1').value;
  }
  
  get ch2(){
    return this.register.get('ch2').value;
   } 

   get ch3(){
    return this.register.get('ch3').value;
   }
   
   get ch4(){
    return this.register.get('ch4').value;
   }
   
   get ch5(){
    return this.register.get('ch5').value;
   }
   get ch6(){
    return this.register.get('ch6').value;
   }

   get h1(){
     return this.register.get('h1').value;
   }
   
   get h2(){
    return this.register.get('h2').value;
  }
  
  get h3(){
    return this.register.get('h3').value;
  }
  
  get h4(){
    return this.register.get('h4').value;
  }
  
  get h5(){
    return this.register.get('h5').value;
  }
  
  get h6(){
    return this.register.get('h6').value;
  }
  
  get h7(){
    return this.register.get('h7').value;
  }
  
  get h8(){
    return this.register.get('h8').value;
  }
  
  get h9(){
    return this.register.get('h9').value;
  }
  
  get h10(){
    return this.register.get('h11').value;
  }
  
  get h12(){
    return this.register.get('h12').value;
  }
  




 get firstName(){
   return this.register.get('firstName')
 }

 get lastName(){
   return this.register.get('lastName')
 }

 get areaCode(){
   return this.register.get('areaCode')
 }

 get phoneNumber(){
   return this.register.get('phoneNumber')
 }

 get email(){
   return this.register.get('email')
 }

 get street(){
   return this.register.get('street');
 }
 
 get street2(){
  return this.register.get('street2');
}
 get city(){
  return this.register.get('city');
}
 
get state(){
  return this.register.get('state');
}

get occupation(){
  return this.register.get('occupation');
}

get companyName(){
  return this.register.get('companyName');
}


get job(){
  return this.register.get('job');
}
get m1(){
  return this.register.get('m1').value;
}

get m2(){
  return this.register.get('m2').value;
}

get m3(){
  return this.register.get('m3').value;
}

get m4(){
  return this.register.get('m4').value;
}

get m5(){
  return this.register.get('m5').value;
}

get m6(){
  return this.register.get('m6').value;
}

get comment(){
  return this.register.get('comment')
}

get l1(){
  return this.register.get('l1').value;
}

get l2(){
  return this.register.get('l2').value;
}

get l3(){
  return this.register.get('l3').value;
}

get l4(){
  return this.register.get('l4').value;
}

get l5(){
  return this.register.get('l5').value;
}

get l6(){
  return this.register.get('l6').value;
}

 onSubmit(){
  console.log(this.register.value);
  this.es.enroll(this.register.value).subscribe((res)=> {
    console.log(res);
  })
}
}
