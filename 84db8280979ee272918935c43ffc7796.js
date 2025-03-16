function isInsetsDisabled (){
            try{
                self.disallowInsets = (top == self  || (top != self && typeof top.disallowInsets == 'undefined') ) ? false : true;
                return (top == self  || (top != self && typeof top.disallowInsets == 'undefined') ) ? false : true;
            } catch(e){
                return false;
            }
        }
        isInsetsDisabled ();