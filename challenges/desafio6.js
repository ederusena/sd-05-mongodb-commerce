db.produtos.updateMany({$and: [{"nome": {$exists: "Big Mac"}}, {"nome": {$exists: "Quarteirão com Queijo"}}]}, {$addToSet: {"ingredientes": "bacon"}});
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1});
