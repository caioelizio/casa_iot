<script>self.defaultStatus='--==CaioElizio_HP==--'; //nome na barra de status</script>


Voc� pode encontrar muitos links sobre javascript em Gamelan => 
http://www.gamelan.com (na se��o JavaScript). 


<script>location.replace('principal.php');</script>

-----------------Manual JavaScript-----------------

Operadores Matem�ticos

     +     adi��o de valor e concatena��o de strings 
     -     subtra��o de valores 
     *     multiplica��o de valores 
     /     divis�o de valores 
     %     obtem o resto de uma divis�o: 
           Ex: 150 % 13 retornar� 7 
                  7 % 3 retornar� 1 

    +=   concatena /adiciona ao string/valor j� existente. Ou seja: 
         x  +=  y  � o mesmo que  x = x + y 
         da mesma forma podem ser utilizados: -= , *= ,  /= ou %=  
   Um contador pode ser simplificado utilizando-se : X++ ou  X--  o que equivale as express�es: 
   X = X + 1  ou  X = X - 1 respectivamente. 
   Para inverter sinal:  X = -X  negativo para positivo ou  positivo para negativo. 
                                

Operadores L�gicos

    ==     Igual 
    !=     Diferente 
    >      Maior 
    >=     Maior ou Igual  
    <=     Menor ou Igual 
    &&     E 
    ||     Ou 


Controles Especiais

    \b - backspace 
    \f - form feed  
    \n - new line caracters 
    \r - carriage return 
    \t - tab characters 
    // - Linha de coment�rio 
    /*....*/ - Delimitadores para inserir um texto com mais de uma linha como coment�rio.

Os delimitadores naturais para uma string s�o " ou '
Caso seja necess�rio a utiliza��o destes caracteres como parte da string,
utilize \ precedendo " ou '. 


Comando IF 

if  (condi��o) 
    { a��o para condi��o satisfeita } 
  else 
    { a��o para condi��o n�o satisfeita }

Ex. 
if (Idade < 18) 
 {Categoria = "Menor" } 
else 
 {Categoria = "Maior"}


Comando FOR 

for ( [inicializa��o/cria��o de vari�vel de controle ;] 
       [condi��o ;] 
       [incremento da vari�vel de controle] ) 
       { a��o } 

Ex. 
for (x = 0 ; x <= 10 ; x++) 
    {alert ("X igual a " + x) }


Comando WHILE 

Executa uma a��o enquanto determinada condi��o for verdadeira. 

while (condi��o) 
         { a��o }

Ex. 
let contador = 10 
      while (contador > 1) 
              { contador-- }


Move condicional 

receptor = ( (condi��o) ? verdadeiro : falso)

Ex. 
NomeSexo = ((VarSexo == "M") ? "Masculino" : "Feminino")

OBS: 
Nos comandos FOR e WHILE a diretiva "break" pode ser utilizada para interromper a 
condi��o principal e sair do loop. Da mesma forma, a diretiva "continue" interrompe uma 
a��o (se determinada condi��o ocorrer) mas volta para o loop. 
Diretivas/condi��es entre [ ] significam que s�o opcionais.


Eventos
S�o fatos que ocorrem durante a execu��o do sistema, a partir dos quais o programador pode 
definir a��es a serem realizadas pelo programa. 
Abaixo apresentamos a lista dos eventos poss�veis, indicando os momentos em que os mesmos 
podem ocorrer, bem como, os objetos pass�veis de sua ocorr�ncia.

onload - Ocorre na carga do documento. Ou seja, s� ocorre no BODY do documento.

onunload - Ocorre na descarga (sa�da) do documento. Tamb�m s� ocorre no BODY. 

onchange - Ocorre quando o objeto perde o focus e houve mudan�a de conte�do. 
                   v�lido para os objetos Text, Select e Textarea. 

onblur - Ocorre quando o objeto perde o focus, independente de ter havido mudan�a. 
               v�lido para os objetos Text, Select e Textarea. 

onfocus - Ocorre quando o objeto recebe o focus. 
                 v�lido para os objetos Text, Select e Textarea. 

onclick - Ocorre quando o objeto recebe um Click do Mouse. 
                v�lido para os objetos Buton, Checkbox, Radio, Link, Reset e Submit. 

onmouseover - Ocorre quando o ponteiro do mouse passa por sobre o objeto. 
                            v�lido apenas para Link. 

onselect - Ocorre quando o objeto � selecionado. 
                  v�lido para os objetos Text e Textarea. 

onsubmit - Ocorre quando um bot�o tipo Submit recebe um click do mouse. 
                   v�lido apenas para o Form. 


Criando Vari�veis
A vari�vel � criada automaticamente, pela simples associa��o de valores a mesma.

Ex. NovaVariavel = "Jose" 

Foi criada a vari�vel de nome NovaVariavel que, passou a conter a string Jose. 

As vari�veis podem ser Locais ou Globais. As vari�veis que s�o criadas dentro
de uma fun��o s�o Locais e referenci�veis apenas dentro da fun��o. 
As vari�veis criadas fora de fun��es s�o Globais, podendo serem referenciadas
em qualquer parte do documento. 


Escrevendo no Documento
O JavaScript permite que o programador escreva linhas dentro de uma p�gina (documento), 
atrav�s do m�todo write. As linhas escritas desta forma, podem conter textos, express�es 
JavaScript e comandos Html.

Ex: 
<script> 
valor = 30 
document.write ("Minha primeira linha") 
document.write ("Nesta linha aparecer� o resultado de : " + (10 * 10 + valor)) 
</script>



Existem tr�s formas de comunica��o com o usu�rio atrav�s de mensagens. 

Apenas Observa��o: alert ( mensagem ) 
Ex. alert ("Certifique-se de que as informa��es est�o corretas") 


Mensagem que retorna confirma��o de OK ou CANCELAR: 

confirm (mensagem) 

Ex. if (confirm ("Algo est� errado...devo continuar??")) 
       { alert("Continuando") } 
    else 
       { alert("Parando") }

Recebe mensagem via caixa de texto Input: 

Receptor = prompt ("Minha mensagem", "Meu texto") 

Onde: 
Receptor � o campo que vai receber a informa��o digitada pelo usu�rio 
Minha mensagem � a mensagem que vai aparecer como Label da caixa de input 
Meu texto � um texto, opcional, que aparecer� na linha de digita��o do usu�rio 

Ex. 
Entrada = prompt("Informe uma express�o matem�tica", "") 
Resultado = eval(Entrada) 
document.write("O resultado � = " + Resultado) 



Criando Fun��es
A sintaxe geral � a seguinte: 
function NomeFun��o (Par�metros) 
                    { A��o }

Suponha uma fun��o que tenha como objetivo informar se uma pessoa � 
maior ou menor de idade, recebendo como par�metro a sua idade. 

function Idade (Anos) { 
                       if  (Anos > 17) 
                           { alert ("Maior de Idade") } 
                       else 
                           { alert ("menor de Idade") } 
                      }

Para acionar esta fun��o, suponha uma caixa de texto, em um formul�rio, 
na qual seja informada a idade e, a cada informa��o, a fun��o seja acionada. 

<form> <input type=text size=2 maxlength=2 name="Tempo"        
onchange="Idade(Tempo.value)"> </form> 

Observe-se que o par�metro passado (quando ocorre o evento "onchange") 
foi o conte�do da caixa de texto "Tempo" (propriedade "value") 
e que, na fun��o, chamamos de "Anos".



Fun��es Intr�nsecas
S�o fun��es embutidas na pr�pria linguagem. A sintaxe geral � a seguinte:

Result = fun��o (informa��o a ser processada)

- eval = Calcula o conte�do da string 
- parseInt - Transforma string em inteiro 
- parseFloat - Transforma string em n�mero com ponto flutuante 
- date() - Retorna a data e a hora (veja o cap�tulo manipulando datas) 

ex1: Result = eval ( " (10 * 20) + 2 - 8") 

ex2: Result = eval (string) 



- Fun��es tipicamente Matem�ticas: 

Math.abs(n�mero) - retorna o valor absoluto do n�mero (ponto flutuante) 
Math.ceil(n�mero) - retorna o pr�ximo valor inteiro maior que o n�mero 
Math.floor(n�mero) - retorna o pr�ximo valor inteiro menor que o n�mero 
Math.round(n�mero) - retorna o valor inteiro, arredondado, do n�mero 
Math.pow(base, expoente) - retorna o c�lculo do exponencial 
Math.max(n�mero1, n�mero2) - retorna o maior n�mero dos dois fornecidos 
Math.min(n�mero1, n�mero2) - retorna o menor n�mero dos dois fornecidos 
Math.sqrt(n�mero) - retorna a raiz quadrada do n�mero 
Math.SQRT2 - retorna a raiz quadrada de 2 (aproximadamente 1.414) 
Math.SQRT_2 - retorna a raiz quadrada de 1/2 (aproximadamente 0.707) 
Math.sin(n�mero) - retorna o seno de um n�mero (anglo em radianos) 
Math.asin(n�mero) - retorna o arco seno de um n�mero (em radianos) 
Math.cos(n�mero) - retorna o cosseno de um n�mero (anglo em radianos) 
Math.acos(n�mero) - retorna o arco cosseno de um n�mero (em radianos) 
Math.tan(n�mero) - retorna a tangente de um n�mero (anglo em radianos) 
Math.atan(n�mero) - retorna o arco tangente de um n�mero (em radianos) 
Math.pi retorna o valor de PI (aproximadamente 3.14159) 
Math.log(n�mero) - retorna o logar�tmo de um n�mero 
Math.E - retorna a base dos logar�tmos naturais (aproximadamente 2.718) 
Math.LN2 - retorna o valor do logar�tmo de 2 (aproximadamente 0.693) 
Math.LOG2E - retorna a base do logar�tmo de 2 (aproximadamente 1.442) 
Math.LN10 retorna o valor do logar�tmo de 10 (aproximadamente 2.302) 
Math.LOG10E - retorna a base do logar�tmo de 10 (aproximadamente 0.434) 

Observa��o: 
Em todas as fun��es, quando apresentamos a express�o "(n�mero)", na verdade queremos 
nos referir a um argumento que ser� processado pela fun��o e que poder� ser: um n�mero, 
uma vari�vel ou o conte�do de um objeto (propriedade value). 



Criando Novas Inst�ncias
Atrav�s do operador new podem ser criadas novas inst�ncias a objetos j� existentes, mudando o 
seu conte�do, por�m, mantendo suas propriedades. 

A sintaxe geral � a seguinte: NovoObjeto = new ObjetoExistente (par�metros) 

Ex1. MinhaData = new Date () 
MinhaData passou a ser um objeto tipo Date, com o mesmo conte�do existente em Date 
(data e hora atual) 

Ex2: MinhaData = new Date(1996, 05, 27) 
MinhaData passou a ser um objeto tipo Date, por�m, com o conte�do de uma nova data. 

Ex3: 
Suponha a exist�ncia do seguinte objeto chamado Empresas 
function Empresas (Emp, Nfunc, Prod) 
                            { this.Emp = Emp 
                               this.Nfunc = Nfunc 
                               this.Prod = Prod }

Podemos criar novas inst�ncias, usando a mesma estrutura, da seguinte forma: 

Elogica = new Empresas("Elogica", "120", "Servi�os") 
Pitaco = new Empresas("Pitaco", "35", "Software") 
Corisco = new Empresas("Corisco", "42", "Conectividade") 

Assim, a vari�vel Elogica.Nfunc ter� o seu conte�do igual a 120 



Manipulando Arrays
O JavaScript n�o tem um tipo de dado ou objeto para manipular arrays. 
Por isso, para trabalhar com arrays � necess�rio a cria��o de um objeto 
com a propriedade de cria��o de um array. 

No exemplo abaixo, criaremos um objeto tipo array de tamanho vari�vel 
e com a fun��o de "limpar" o conte�do das vari�veis cada vez que uma nova 
inst�ncia seja criada a partir dele. 

function CriaArray (n) { this.length = n 
                       for (let i = 1 ; i <= n ; i++) 
                       { this[i] = "" }   } 

Agora podemos criar novas inst�ncias do objeto "CriaArray" 
e aliment�-los com os dados necess�rios.

NomeDia = new CriaArray(7) 
NomeDia[0] = "Domingo" 
NomeDia[1] = "Segunda" 
NomeDia [2] = "Ter�a" 
NomeDia[3] = "Quarta" 
NomeDia[4] = "Quinta" 
NomeDia[5] = "Sexta" 
NomeDia[6] = "S�bado" 

Atividade = new CriaArray(5) 
Atividade[0] = "Analista" 
Atividade[1] = "Programador" 
Atividade[2] = "Operador" 
Atividade[3] = "Conferente" 
Atividade[4] = "Digitador" 

Agora poderemos obter os dados diretamente dos arrays. 

DiaSemana = NomeDia[4], Ocupa��o = Atividade[1] 
DiaSemana passaria a conter Quinta e Ocupa��o conteria Programador.

Outra forma de se trabalhar com arrays � criar novas inst�ncias dentro do pr�prio objeto do 
array, o que proporciona o mesmo efeito de se trabalhar com matriz. Isso pode ser feito da 
seguinte forma: 

function Empresas (Emp, Nfunc, Prod) { this.Emp = Emp 
                                       this.Nfunc = Nfunc 
                                       this.Prod = Prod }

TabEmp = new Empresas(3) 
TabEmp[1] = new Empresas("Elogica", "120", "Servi�os") 
TabEmp[2] = new Empresas("Pitaco", "35", "Software") 
TabEmp[3] = new Empresas("Corisco", "42", "Conectividade")

Assim, poderemos obter a atividade da empresa n�mero 3, cuja resposta seria Conectividade,
da seguinte forma: 
Atividade = TabEmp[3].Prod 
Obs: � importante lembrar que, embora os exemplos estejam com indexadores fixos, 
os indexadores podem ser refer�ncias ao conte�do de vari�veis. 



Manipulando String's
O JavaScript � bastante poderoso no manuseio de String�s, fornecendo ao programador uma total 
flexibilidade em seu manuseio. 

string.length - retorna o tamanho da string (quantidade de bytes)

string.charAt(posi��o) - retorna o caracter da posi��o especificada (inicia em 0) 

string.indexOf("string") - retorna o n�mero da posi��o onde come�a a primeira "string" 

string.lastindexOf("string") - retorna o n�mero da posi��o onde come�a a �ltima "string" 

string.substring(index1, index2) - retorna o conte�do da string que corresponde ao intervalo
especificado. Come�ando no caracter posicionado em index1 e terminando no caracter
imediatamente anterior ao valor especificado em index2. 

Ex. 
Todo = "Elogica" 
Parte = Todo.substring(1, 4) - (A vari�vel Parte receber� a palavra log) 

string.toUpperCase() - Transforma o conte�do da string para mai�sculo (Caixa Alta)

string.toLowerCase() - Transforma o conte�do da string para min�sculo (Caixa Baixa) 

escape ("string") - retorna o valor ASCII da string (vem precedido de %) 

unscape("string") - retorna o caracter a partir de um valor ASCII (precedido de %) 



Manipulando Datas

Ex. 
Fri May 24 16:58:02 1996 

Para se obter os dados separadamente, existem os seguintes m�todos: 

getDate() - Obt�m o dia do m�s (num�rico de 1 a 31) 
getDay() - Obt�m o dia da semana (0 a 6) 
getMonth() - Obt�m o m�s (num�rico de 0 a 11) 
getYear() - Obt�m o ano 
getHours() - Obt�m a hora (num�rico de 0 a 23) 
getMinutes() - Obt�m os minutos (num�rico de 0 a 59) 
getSeconds() - Obt�m os segundos (num�rico de 0 a 59)


DiaHoje = DataToda.getDay() 

Para obter o dia da semana alfa, teremos que construir uma tabela com os dias da semana e 
utilizar a vari�vel DiaHoje como indexador. 

function CriaTab (n) { this.length = n 
                       for (let x = 1 ; x<= n ; x++) 
                     { this[x] = "" }   } 

NomeDia = new CriaTab(7) 
NomeDia[0] = "Domingo" 
NomeDia[1] = "Segunda" 
NomeDia [2] = "Ter�a" 
NomeDia[3] = "Quarta" 
NomeDia[4] = "Quinta" 
NomeDia[5] = "Sexta" 
NomeDia[6] = "S�bado" 

DiaSemana = NomeDia[DiaHoje] 

Para criar uma vari�vel tipo Date com o conte�do informado pela aplica��o, existe o m�todo 
set. Assim, temos os seguintes m�todos: setDate, setDay, setMonth, setYear, 
setHours, setMinutes e setSeconds. 

Seguindo o exemplo acima, para mudar o m�s para novembro, ter�amos: 
DataToda.setMonth(10) 



Objeto Input PASSWORD
� o objeto para entrada de Senhas de acesso (password). 
Os dados digitados neste objeto s�o criptografados e, s� s�o interpretados (vistos) 
pelo "server", por raz�es de seguran�a. 
Suas principais propriedades s�o: type, size, maxlength, name e value.

type=password : Especifica um campo para entrada de senha. Os dados digitados s�o
substituidos (na tela) por "*". 

size : Especifica o tamanho do campo na tela. 
maxlength : Especifica a quantidade m�xima de caracteres permitidos. 
name : Especifica o nome do objeto 
value : Armazena o conte�do digitado no campo. 

Os eventos associados a este objeto s�o: onchange, onblur, onfocus e onselect. 

Ex: 
<form name="TPassword"> 
<p>Entrada de Senha<input type=password size=10 maxlength=10 name="Senha" value=""> 
</p> 
</form> 



Objeto Input HIDDEN
� um objeto semelhante ao input text, por�m, invis�vel para o usu�rio. 
Este objeto deve ser utilizado para passar informa��es ao "server" 
(quando o formul�rio for submetido) sem que o usu�rio tome conhecimento. 
Suas propriedades s�o: name e value. 

name : Especifica o nome do objeto. 
value : Armazena o conte�do do objeto 

Ex: 
<form name="THidden"> 
<input type=hidden size=20 maxlength=30 name="HdTexto" value="" > 
</form> 
</p> 



Objeto Input CHECKBOX

Suas principais propriedades s�o: name, value e checked.

name  : Especifica o nome do objeto 
value : Especifica o valor que ser� enviado ao "server" se o objeto estiver ligado (checked). 
Caso seja omitido, ser� enviado o valor default "on".
 
checked : Especifica que o objeto inicialmente estar� ligado 

O �nico evento associado a este objeto � onclick.

Ex:
No exemplo abaixo, criaremos um objeto input.text e tr�s objetos checkbox. 
O primeiro checkbox, quando ativado, transformar� o texto em caracteres min�sculos. 
O segundo checkbox, quando ativado, transformar� o texto em caracteres mai�sculos. 
O terceiro checkbox, quando ativado, dar� um aviso do conte�do que ser� recebido 
pelo "server" caso o formul�rio seja submetido para este.

<SCRIPT> 
function AltMaiusc () { document.TCheck.Muda.value = document.TCheck.Muda.value.toUpperCase() 
document.TCheck.Opt1.checked = false } 

function AltMinusc () { document.TCheck.Muda.value = document.TCheck.Muda.value.toLowerCase()
document.TCheck.Opt2.checked = false } 
</SCRIPT> 

<p> 
<form name="TCheck"> 
Muda Case <input type=text size=20 maxlength=20 name="Muda"> 
</p> 

<p> 
Minusculo<input type=checkbox name="Opt1" value="1" checked 
                  onclick="if (this.checked) 
                                   { AltMinusc() } "> 

Maiusculo<input type=checkbox name="Opt2" value="2" 
                  onclick="if (this.checked) 
                                   { AltMaiusc() } "> 

Demo valor<input type=checkbox name="Opt3" 
                    onclick="if (Opt3.checked) 
                                     {alert ('Server recebera = ' + Opt3.value) } "> 
</p> 
</form> 



Objeto Input RADIO
S�o objetos que permitem ao usu�rio a escolha de apenas uma alternativa
Suas principais propriedades s�o: name, value e checked. 

name : Especifica o nome do objeto. Para caracterizar uma mesma s�rie de op��es, todos os             objetos desta s�rie t�m que ter o mesmo "name". 
value : Especifica o valor que ser� enviado ao "server" se o objeto estiver ligado (checked). Caso             seja omitido, ser� enviado o valor default "on" . Esta propriedade tamb�m serve para 
        atilet comandos l�gicos, testando-se a condi��o de "checked". 
checked: Especifica que o objeto inicialmente estar� ligado

Para utiliza��o deste objeto � importante o conhecimento de outras propriedades associadas: 

Objeto.length : Retorna a quantidade de op��es existentes na lista 
Objeto.[index].value : retorna o texto (value) associado a cada op��o 
Objeto.[index].checked : retorna verdadeiro ou falso 

O �nico evento associado a este objeto � onclick.

Ex. No exemplo abaixo temos dois set's de objetos radio. O primeiro tem o objetivo de mudar a cor de fundo do documento atual. O segundo tem o objetivo lelet informa��es ao "server". 

<p>Radio</p> 
<p>         <input type=radio name="Rad" value="1" 
                  onclick="document.bgColor='green'"> Fundo Verde 
               <input type=radio name="Rad" value="2" 
                  onclick="document.bgColor='blueviolet'"> Fundo Violeta 
               <input type=radio name="Rad" value="3" 
                  onclick="document.bgColor='#FFFF00'"> Fundo Amarelo 
</p> 
<p> 
               <input type=radio name="Rad2" value="1"> Solteiro 
               <input type=radio name="Rad2" value="2"> Casado 
               <input type=radio checked name="Rad2" value="3"> Tico Tico 
</p> 




<script>
		let altura = 23;
		let largura = 50;
		let velocidade = 50

		let a = 0;
		let b = 0;
		largura += 2;

		for (b = 0; b < altura+2; b++)
			{
				document.write("<img src=Fim.gif width=0 Altura=0>");
				for (a = 0; a < largura- 2; a++)
					{
						if ((b == 0) || (b == altura+1))
							{
								document.write("<img src=Fim.gif width=0 height=0>");
							}
						else
							{
								document.write("<img src=fundo.jpg width=15 height=15>");
							}
					}
				document.write("<img src=Fim.gif width=0 height=0><br>");
			}

		let o = 700; //posicao do inicio da cobra
		let x = o;
		let n = 0;
		let limpo = document.images[1].src;
		let al = (altura * largura);
		let comida = 0;
		let pontuacao = 0;

		comida = Math.floor(Math.random() * al-2);

		document.images[x].src = "parte.jpg";

		let minhoca = new Array();

		let direcao = 0;
		let tecla = 0;
		document.onkeydown = teclas;
		function teclas(DnEvents)
			{
				tecla = window.event.keyCode;
				if (tecla == 37) { direcao = 1; }	//esquerda
				if (tecla == 39) { direcao = 2; }	//direita
				if (tecla == 40) { direcao = 3; }	//baixo
				if (tecla == 38) { direcao = 4; }	//cima
			}

		let comprimento = 4;

		function executar()
			{
				if (direcao != 0) { n++; }	//pega a posicao do ultimo quadro da cobra
				if (direcao == 1) { x--; }
				if (direcao == 2) { x++; }
				if (direcao == 3) { x += largura; }
				if (direcao == 4) { x -= largura; }

				if (document.images[x].src == document.images[largura-1].src){
						velocidade -= 400; x = minhoca[n-1];
						morreu();
					}

				minhoca[n] = x;

				if (x == comida) {
						comprimento++; 
						pontuacao = pontuacao+10;

						comida = Math.floor(Math.random() * al-2);
					}

				
				if (n > comprimento){
						o = minhoca[n-comprimento];
					}

					document.images[o].src = "fundo.jpg";	//fundo em cima do ultimo quadro da cobra
					document.images[x].src = "parte.jpg";
					document.images[comida].src = "parte.jpg";
					window.setTimeout("executar();", velocidade);
			}

		function morreu(){
				alert("Voc� perdeu man�! e s� fez "+pontuacao+" pontos");

				location.reload();
			}

		window.onload = executar;

</script>
