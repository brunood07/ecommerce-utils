type Address = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export async function getAddressByCep(cep: string): Promise<Address | null> {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
      method: "GET",
    });
    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    throw new Error(`Failed to get address by cep: ${error}`);
  }
}
