import sys,os,random,time
class helper:
	def __init__(self):
		self.lol = 5

	#public API
	def fit(self,arr):
		#def all var
		res = 0
 		cur = 0
		row = 0
		upLeft = 0
		upRight = 0
		for i in range(len(arr)):
			#reset vars 				
			cur =int(arr[i])
			if(cur<1 or cur>8):
				print("wrong value for 8 Queen!")
				break	
			row = 0 
 			upLeft = 0 
			upRight = 0
			j = i + 1
			while(j<len(arr)):
				if int(arr[j]) == cur:
					row += 1
				if cur == (int(arr[j]) - j + i): 
					upRight += 1
				if cur == (int(arr[j]) + j - i):
					upLeft += 1	
				j = j + 1
			res = res+row+upRight+upLeft	
		return res
	
	def gen(self,length):
		i=length
		res=""
		r=random
		if(length<0):
			return None		
		while(i>0):
			temp=r.randint(1,8)
			res=res+str(temp)	
			i -= 1
		return res
		
	def fn(self,s):
		score = self.fit(s)
		score = 28-score
		score = score/28.0 *100
   		return score
	
	def cross(self, a, b):
		if(len(a)!=len(b) or len(a)==0):
			print("Can't cross, length differ")
		else:
			r=random
			#the range below set as is, so cross is a MUST
			N=r.randint(1,len(a)-1)
			a1=a[:N]
			a2=a[N:]
			b1=b[:N]
			b2=b[N:]
			r1 = a1+b2
			r2 = b1+a2
			#print "N:" +str(N)
		return (r1,r2)
	
	#returns the mutated version
	def mutate(self, a):
		if len(a)<1:
			return None
		else:	
			while(1):	
				r=random
				n=r.randint(0,len(a)-1)
				now = a[n]
				sub=str(r.randint(1,8))
				if sub!=now:
					res=a[:n]+str(sub)+a[(n+1):]
					return res

	#probability p ranging from 0 to 100 percent, return T/F
	def chance(self, p ):
		if(p<0 or p>100):
			print "invalid probability"
			return None
		else:
			r=random
			num=r.randint(1,100)
			if(num<=p):	
				return True
			else:
				return False
	
	
	#FINALLY :) sp--starting population, s--selection standard , m--mutation chance, n---board width&height
	def GA(self, sp, s, m, n, count):
		t0=time.time()
		i = sp;
		#g for generation
		g=[]
		#the following are result list
		result=[]
		#init population
		while(i>0):
			g.append(self.gen(n))
			i -= 1
		while(count>0):
			i = 0
			#selection
			while(i<len(g)):
				if self.fn(g[i])>99 and g[i] not in result:
					print "    Solution: "+ g[i] +" scoring: " +str(self.fn(g[i]))	
				if self.fn(g[i])<s:
					g.pop(i)
				i +=1
			#breeding checking
			if(len(g)<2):
				print "THE END NONE SURVIVED"
				break
			#Reset i 
			i = 0
			if(len(g)%2==0):	
				while(i<len(g)):
					t = self.cross(g[i],g[i+1])
					g[i],g[i+1]=t
					i += 2
			else: 
				while(i+1<len(g)):
					t = self.cross(g[i],g[i+1])
					g[i],g[i+1]=t
					i +=2
				t=self.cross(g[i], g[i-1])
				g[i]=t[0]
				g.append(t[1])
			#end crossover
			#mutation
			for x in g:
				if self.chance(n):
					x = self.mutate(x)
			count -=1
		t1=time.time()
		dif=t1-t0
		resultFound=len(result)
		return(dif,resultFound)		 
			

			
if __name__ == "__main__":
	test=helper()
	print "  Running Function GA Using Different Initial Population"
	print "  	-Selection Standard: 25% "
	print "  	-Mutation Rate:      20% "
        print "  	-Depth of Searching: 10 "
	print "  Number of Unique Solutions Found and Running Time as followed: "
	
	i = 1
	rSum=0
	tSum=0
	while(i!=10):	
		a,b=test.GA(9000,25,20,8,10)
		print "*Running time is :  " + str(a) + " # of results found: " + str(b)
         	rSum = b + rSum
		tSum = a + tSum
	
	print "FINAL: AVERAGE RUNNING TIME: " + str(tSum/10.00) + "AVERAGE RESULTS FOUND: " + str(rSum/10.00)


if __name__=="__TESTING__":
	test=helper()
	res1=test.fit([8,3,7,4,2,5,1,6])
	print res1
	res=test.gen(5)
	print res	
 	res= test.fn("11111111")
	print res
	a = "1111"
	b= "2222"
        print test.cross(a,b)
	a = "98765"
	b = "abcde"
	print test.cross(a,b)
	a= "11111"
 	print test.mutate(a)
	print "Chance!!"
	print test.chance(25)
	
	print test.chance(25)
	print test.chance(25)
	print test.chance(25)
	print test.chance(5)
