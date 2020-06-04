import axios from "axios";

const configAxios = (database) => axios.create({
  baseURL: `http://localhost:8080/fdb/${database}/transact`
})

export const flureeTransact = (database, transactions) => {
  const ax = configAxios(database);
  return ax.post("", transactions).then(res => res).catch(err => err);
}