#include <stdio.h>

int main()
{

   char buff[1024];

   memset( buff, '\0', sizeof( buff ));
   setvbuf(stdout, buff, _IONBF, 1024); 
   
   fprintf(stdout, "Print Without Buffer\n");

	//set buffer
   setvbuf(stdout, buff, _IOFBF, 1024);
   fprintf(stdout, "This Should Come Out With Some '#'s\n");
   fprintf(stdout, "###########################");
   fflush( stdout );
   sleep(5);  

   fprintf(stdout, "This output will go into buff\n");
   fflush( stdout );
   sleep(5);

   fprintf(stdout, "Wait for 5 secs again plz!\n");
   fflush( stdout );

   fprintf(stdout, "and this will appear when programm\n");
   fprintf(stdout, "will come after sleeping 5 seconds\n");
   sleep(5);
   
  // fflush( stdout );
   memset( buff, '\0', sizeof( buff ));
   return(0);
}
