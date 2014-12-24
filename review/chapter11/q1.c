#include <stdio.h>

int findWord(FILE *fp, char *str);

int findWord(FILE *fp, char *str){
	if((fp==NULL)||(str==NULL)){
		perror("file pointer error or empty str error!");
    	}else{
		int state=0,
		    sLength=0;
		char buffer[100];
	 	char *p;
 	 	p = str;
		//get string length	
	 	while(*p!='\0'){
			sLength++;
			p++;
 	 	}
        	
		while(fgets(buffer,100,fp)!=NULL){
        		p=buffer;
			while(*p!='\0'){
				if(state==sLength){
					//we almost find a match, check current to be non word
					if(*p>'Z'||*p<'a'){
						return 1;
					}else{
						state = 0;
					}
				}else{
					if(*p==str[state]){
					//go to next char
						state++;
					}else{
						state = 0;
					}
				}
				p++;
			}	     
       	 	}
	return 0;	
	}
}

int main(){
	FILE *f;
	f=fopen("file/doc1.txt","r");
	char str[10]={'s','t','r','i','n','g','\0'};
        printf("this should be 1: %d",findWord(f,str));
}	
