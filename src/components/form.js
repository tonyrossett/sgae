export default function Form() {
  return (
  
    <main className="font-sans container mx-auto flex flex-col items-center justify-center  px-4 py-8">
  <h1 className="text-lg font-bold mb-4 text-center">
    Dados da Assistência Especializada
  </h1>

    <h2>Digite o nome do(a) assistido(a)</h2>
   <input
    type="text"
    name="nome"
    id="nome"
    className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

    <h2>Digite a quantidade de assistências</h2>
  <input
    type="number"
    name="quant"
    id="quant"
    className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

    <h2>Digite o intervalo das assistências (em dias)</h2>
    <input
    type="number"
    name="interval"
    id="interval"
    className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

    <h2>Digite a data da assistência</h2>
    <input
    type="date"
    name="date"
    id="date"
    className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <h2 >Dia da semana:</h2>
<select
  name="dia"
  id="dia"
  className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <option value="">Selecione um dia</option>
  <option value="domingo">Domingo</option>
  <option value="segunda">Segunda-feira</option>
  <option value="terca">Terça-feira</option>
  <option value="quarta">Quarta-feira</option>
  <option value="quinta">Quinta-feira</option>
  <option value="sexta">Sexta-feira</option>
  <option value="sabado">Sábado</option>
</select>
</main>
   

 
  );
}