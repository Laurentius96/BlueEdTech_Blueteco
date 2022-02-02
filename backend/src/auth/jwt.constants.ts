// 38°) Depois de gerar a chave no site: https://passwordsgenerator.net/ , criamos a constante e exportamos.
export const jwtConstants = {
  secret: '*vJ=<M:{{jPrxS5-',
};

// OBS.01: Após o item 38°, baixamos os pacotes: (npm install --save @nestjs/passport passport passport-local) , (npm install --save-dev @types/passport-local) , (npm install --save @nestjs/jwt passport-jwt) & (npm install --save-dev @types/passport-jwt)
// OBS.02: Após o item 38° vamos para o arquivo: auth.module.ts
