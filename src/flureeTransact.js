import axios from "axios";
import { string } from "prop-types";

const configAxios = (database) => axios.create({
  baseURL: `http://localhost:8080/fdb/${database}/transact`
})

/**
 * 
 * @param {string} database A string indicating the fluree database to be transacted upon
 * @param {Array} transactions Array of JSON objects containing Fluree transactions
 */
export const flureeTransact = (database, transactions) => {
  const ax = configAxios(database);
  return ax.post("", transactions).then(res => res).catch(err => err);
}