int sensorPresenca = 0; //guarda o valor obtido pelo sensor de presença

const int sensorLuminosidade = A0; //pega os valores da porta A2 na qual esta o sensor ldr
float volts = 0; // pegara o valor pego do ldr convertido em volts

const int potenciometro = A5; //armazenara o valor obtido pelo potenciometro
int valorPotenciometro = 0;


void setup()
{
  Serial.begin(9600);
}


void loop()
{

  valorPotenciometro = analogRead(potenciometro);
  
  volts = analogRead(sensorLuminosidade) * 0.0048875; //converte o valor obtido pelo LDR para Volts.
  
  sensorPresenca = digitalRead(7);
  
  if(sensorPresenca == 0)
  {
    Serial.print(1); // apresenta o valor equivalente ao sensor de presença 1 = objeto detectado
    Serial.print(":");
    Serial.print(volts); // apresenta o valor obtido pelo ldr em volts
    Serial.print(":");
    Serial.print(valorPotenciometro); // apresenta o valor obtido pelo potenciometro
    Serial.println(":");
  }
  else
  {
    Serial.print(0); // apresenta o valor equivalente ao sensor de presença 0 = objeto ausente
    Serial.print(":");
    Serial.print(volts); // apresenta o valor obtido pelo ldr em volts
    Serial.print(":");
    Serial.print(valorPotenciometro); // apresenta o valor obtido pelo potenciometro
    Serial.println(":");
  }

  delay(700);
}
