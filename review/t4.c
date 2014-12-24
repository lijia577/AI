#include <stdio.h>
//#include <string.h>

int main()
{
   char buff[1024];
   memset(buff, '\0', sizeof(buff));
   
   fprintf(stdout,"start with no buff\n");
   sleep(2);

   setvbuf(stdout, buff, _IOLBF, 1024);

   fprintf(stdout, "Hellow my name is jia");
   fprintf(stdout, " Li please let me know whtat\n");
   fflush( stdout );

   fprintf(stdout, "another thing is ");
   fprintf(stdout, "going to appear after 3 sec");

   sleep(3);

   return(0);
}
