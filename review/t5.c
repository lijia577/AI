#include<stdio.h>

int main(){
	FILE *fp;
	fpos_t pos;

	fp=fopen("file.txt","w+");

	fputs("Hello", fp);
	fgetpos(fp,&pos);
        fputs("walk", fp);
	fsetpos(fp,&pos);
	fputs("world",fp);

	fclose(fp);

	return 0;

}
