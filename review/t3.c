/* setvbuf example */
#include <stdio.h>

int main ()
{
  char buff[10];
  char stuff[100];
  setvbuf ( stdin , buff , _IOLBF , 10 );
  fgets(stuff,100,stdin);

  printf("\n##############################\n");
  printf("%s\n",stuff);
  return 0;
}
