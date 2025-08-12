"use client";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    nome: "",
    quant: "",
    interval: "",
    date: "",
    dia: "",
  });

  const [registros, setRegistros] = useState([]);
  const [busca, setBusca] = useState("");
  const [resultados, setResultados] = useState([]); // array filtrado

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setRegistros((prev) => [...prev, formData]);
    setFormData({
      nome: "",
      quant: "",
      interval: "",
      date: "",
      dia: "",
    });
  }

  function handleBusca() {
    const encontrados = registros.filter((item) =>
      item.nome.toLowerCase().includes(busca.toLowerCase())
    );
    setResultados(encontrados);
  }

  function handleDelete(index) {
    const novoArray = registros.filter((_, i) => {
      // pega índice original no array registros
      return !(registros.indexOf(resultados[index]) === i);
    });

    // atualiza registros e resultados
    setRegistros(novoArray);
    setResultados((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <main className="font-sans container mx-auto flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-lg font-bold mb-4 text-center">
        Dados da Assistência Especializada
      </h1>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Digite o nome do(a) assistido(a)"
          className="border border-gray-300 rounded-md px-4 py-2 w-72"
        />
        <input
          type="number"
          name="quant"
          value={formData.quant}
          onChange={handleChange}
          placeholder="Quantidade de assistências"
          className="border border-gray-300 rounded-md px-4 py-2 w-72"
        />
        <input
          type="number"
          name="interval"
          value={formData.interval}
          onChange={handleChange}
          placeholder="Intervalo (dias)"
          className="border border-gray-300 rounded-md px-4 py-2 w-72"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 w-72"
        />
        <select
          name="dia"
          value={formData.dia}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 w-72"
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

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Gravar
        </button>
      </form>

      {/* Busca */}
      <div className="mt-6 flex flex-col items-center gap-2">
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Digite o nome para buscar"
          className="border border-gray-300 rounded-md px-4 py-2 w-72"
        />
        <button
          onClick={handleBusca}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Buscar
        </button>
      </div>

      {/* Resultados */}
      {resultados.length > 0 && (
        <div className="mt-4 w-full max-w-md">
          <h2 className="font-bold mb-2">Resultados:</h2>
          <ul className="space-y-2">
            {resultados.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border p-2 rounded"
              >
                <span>
                  {item.nome} - {item.quant} assistências - {item.interval} dias
                  - {item.date} ({item.dia})
                </span>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Apagar
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

