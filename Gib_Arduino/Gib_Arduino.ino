// define the stepper
 
// A4988 pins
const int dirPin = 2;  // direction pin1
const int stepPin = 3; // step pin1
const int dirPin2 = 4;  // direction pin2
const int stepPin2 = 5; // step pin2
 
// steps per round
const int STEPS_PER_REV = 200;

const int fuxin = 176;
 
void setup() {
  
  Serial.begin(9600);
  Serial.setTimeout(10);
  
  // A4988 output type
  pinMode(stepPin,OUTPUT); 
  pinMode(dirPin,OUTPUT);
  pinMode(stepPin2,OUTPUT); 
  pinMode(dirPin2,OUTPUT);
}
void loop() {
//  if (Serial.available()>0){
//    char userdata = Serial.parseInt();
    int fuxin =STEPS_PER_REV/250*187;
    int user=STEPS_PER_REV/250*135;

    // set as clockwise
  digitalWrite(dirPin,LOW); 
  digitalWrite(dirPin2,LOW); 
  
  if (userdata!=0){
  // slow turn
  for(int x = 0; x < fuxin; x++) {
    digitalWrite(stepPin,HIGH); 
    delayMicroseconds(4000); 
    digitalWrite(stepPin,LOW); 
    delayMicroseconds(4000); 
  }

  for(int x = 0; x < user; x++) {
    digitalWrite(stepPin2,HIGH);
    delayMicroseconds(4000); 
    digitalWrite(stepPin2,LOW); 
    delayMicroseconds(4000); 
  }
  
  // wait for one second
  delay(1000); 
  
  // set as anticlockwise
  digitalWrite(dirPin,HIGH);
  digitalWrite(dirPin2,HIGH);
  
  // turn back to origin
  for(int x = 0; x < fuxin; x++) {
    digitalWrite(stepPin,HIGH);
    delayMicroseconds(4000);
    digitalWrite(stepPin,LOW);
    delayMicroseconds(4000);
  }

  for(int x = 0; x < user; x++) {
    digitalWrite(stepPin2,HIGH);
    delayMicroseconds(4000);
    digitalWrite(stepPin2,LOW);
    delayMicroseconds(4000);
  }

  // wait for one second
  delay(1000); 
  }
  else{
    Serial.println("error!");
  }

}
