var presidents = [
"George Washington",
"John Adams", 
"Thomas Jefferson", 
"James Madison", 
"James Monroe", 
"John Quincy Adams", 
"Andrew Jackson", 
"Martin Van Buren", 
"William Henry Harrison",
"John Tyler", 
"James Knox Polk",
"Zachary Taylor", 
"Millard Fillmore", 
"Franklin Pierce", 
'James Buchanan',
 "Abraham Lincoln",
 "Andrew Johnson",
 "Ulysses S. Grant", 
 "Rutherford B. Hayes", 
 "James Garfield",
"Chester Arthur",
"Grover Cleveland",
 "Benjamin Harrison",
 "Grover Cleveland", 
 "William McKinley",
 "Theodore Roosevelt", 
 "William Howard Taft", 
 "Woodrow Wilson", 
 "Warren Harding", 
 "Calvin Coolidge", 
"Herbert Hoover",
 "Franklin D. Roosevelt", 
"Harry S Truman", 
 "Dwight D. Eisenhower", 
 "John F. Kennedy", 
 "Lyndon Johnson", 
 "Richard Nixon", 
 "Gerald Ford", 
"James Carter",  
"Ronald Reagan", 
"George H. W. Bush",  
"William J. Clinton", 
"George W. Bush",  
"Barack H. Obama"
];

for(i=0; i<presidents.length; i++) {
  console.log("President #" + (i+1) + " was " + presidents[i]);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (key in antSpecies) {
  console.log(key);
}


