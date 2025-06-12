
# Recuperação/Segunda Chamada Avaliativa II - Prática

- Curso - Desenvolvimento de Sistemas
- Unidade Curricular - Desenvolvimento de Sistemas
- Docente - Gustavo Roberto de Souza

## Orientações Gerais
- A avaliação deverá ser realizada individualmente.
- Está PROIBIDO uso do CHATGPT para qualquer consulta.
- Não é permitido o uso do celular durante a realização da atividade.
- Conceitos de Frontend.
- A entrega deverá ser feita no AVA. Deve ser enviado apenas o link do repositório do github.

## Passo-a-Passo (Clonar e Entrega)
1. Você deve fazer um fork desse repositório, na parte superior dessa página clique na botão de fork. 
2. Depois disso, você deve clonar o repositório para o seu computador, usando o seguinte comando.
   1. Selecione uma pasta no computador.
   2. Abra o CMD (Terminal).
   3. Execute o seguinte comando `git clone <url_do_repositório>`
3. Abra no seu VS Code a pasta do projeto.
4. Desenvolva os exercícios.
5. Ao finalizar você precisa comittar e enviar novamente para o github suas modificações.
   1. Primeiro precisamos adicionar as alterações ao stage, usando o comando  `git add .`.
   2.  Depois disso, você vai de fato commitar, usando o comando `git commit -m "sua mensagem"`.
   3.  Por fim, você precisa fazer push para o github, com o comando `git push origin master`.
6. Por fim, você deve copiar o link do seu repositório e fazer o envio no AVA. 
   1. Você deve adicionar como comentário na entrega do AVA.

## Atividade
Na empresa XYZ LTDA, após a primeira fase bem sucedida, com a construção do frontend do projeto que visa desenvolver um sistema de cadastros dos desenvolvedores da empresa, veio a segunda fase que é a construção do backend. Você como desenvolvedor deve criar um backend com as funcionalidades básicas de CRUD (Create, Read, Update e Delete) do sistema de cadastros de DEVs. Os requisitos funcionais básicos são:

- Deve permitir Cadastrar um desenvolvedor;
- Deve permitir Buscar todos os desenvolvedores;
- Deve permitir Buscar um desenvolvedor especifico pelo seu ID;
- Deve permitir Atualizar somente as tecnologias(campo obrigatório) do desenvolvedor especifico;
- Deve permitir Delete o desenvolvedor por ID;


As informações devem ser persistidas (armazenadas), no banco de dados; Na deleção você escolho se prefere
deletar de fato a informação ou somente desativar. Caso queira desativar, lembre-se de adicionar o campo
is_active ou algo parecido do tipo boolean.


## Sugestão de dados do desenvolvedor

```
  name: string;
  bio: string;
  techs: string[];
  github_url: string;
  avatar_url: string;
  created_at: Date;
  updated_at: Date;
```