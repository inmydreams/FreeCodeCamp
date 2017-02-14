$(document).ready(function(){
  $('#mG61Hd').bootstrapValidator({
        framework:'bootstrap',
        fields:{
            'entry.1482176849':{
                validators:{
                    notEmpty:{
                        message:"Enter name"
                    },
                    stringLength:{
                      min:2
                    }
                }
            },
            'entry.683107011':{
              validators:{
                notEmpty:{
                  message:"Enter email"
                },
                emailAddress:{
                  message:"Enter email"
                }
              }
            },
          'entry.1704271085':{
            validators:{
              notEmpty:{
                message:"Enter message"
              },
              stringLength:{
                min:20
              }
            }
          }
        }
    });
});