import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xa48eE679Ea2F8d0E42aEa0547BB291A1275E9838");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Leão 1918",
        description: "Esse NFT vai te dar acesso ao LEAODAO!",
        image: readFileSync("scripts/assets/lion.png"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no !");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()