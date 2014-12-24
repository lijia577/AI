#include <stdio.h>

int main(){
	char res[100];
	FILE *fp = fopen("stdin.txt","w");
        
	if(fgets(res,10,fp)&&ferror(fp)){
		printf("%s",&res);
	}else{
		printf("there is error");
	}
	
	return 0;
}
