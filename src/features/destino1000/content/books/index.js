// Catálogo Central da Biblioteca Didática ENEM - Destino 1000
import { LIVRO_MATEMATICA_FUNCOES } from './matematica-funcoes';
import { LIVRO_MATEMATICA_FUNDAMENTOS } from './matematica-fundamentos';
import { LIVRO_MATEMATICA_GEOMETRIA_ESPACIAL } from './matematica-geometria-espacial';
import { LIVRO_MATEMATICA_ESTATISTICA_PROBABILIDADE } from './matematica-estatistica-probabilidade';
import { LIVRO_NATUREZA_ELETRODINAMICA } from './natureza-eletrodinamica';
import { LIVRO_NATUREZA_ECOLOGIA } from './natureza-ecologia';
import { LIVRO_NATUREZA_QUIMICA_ORGANICA } from './natureza-quimica-organica';
import { LIVRO_NATUREZA_GENETICA_BIOTECNOLOGIA } from './natureza-genetica-biotecnologia';
import { LIVRO_NATUREZA_FISICO_QUIMICA } from './natureza-fisico-quimica';
import { LIVRO_NATUREZA_MECANICA_ENERGIA } from './natureza-mecanica-energia';
import { LIVRO_HUMANAS_BRASIL_CONTEMPORANEO } from './humanas-brasil-contemporaneo';
import { LIVRO_HUMANAS_FILOSOFIA_SOCIOLOGIA } from './humanas-filosofia-sociologia';
import { LIVRO_HUMANAS_GEOGRAFIA_GEOPOLITICA } from './humanas-geografia-geopolitica';
import { BOOK_LINGUAGENS_GENEROS_ARGUMENTACAO } from './linguagens-generos-argumentacao';
import { LIVRO_LINGUAGENS_LITERATURA_ARTES } from './linguagens-literatura-artes';
import { BOOK_REDACAO_MANUAL_NOTA_1000 } from './redacao-manual-nota-1000';

export const ALL_ENEM_BOOKS = [
  LIVRO_MATEMATICA_FUNCOES,
  LIVRO_MATEMATICA_FUNDAMENTOS,
  LIVRO_MATEMATICA_GEOMETRIA_ESPACIAL,
  LIVRO_MATEMATICA_ESTATISTICA_PROBABILIDADE,
  LIVRO_NATUREZA_ELETRODINAMICA,
  LIVRO_NATUREZA_ECOLOGIA,
  LIVRO_NATUREZA_QUIMICA_ORGANICA,
  LIVRO_NATUREZA_GENETICA_BIOTECNOLOGIA,
  LIVRO_NATUREZA_FISICO_QUIMICA,
  LIVRO_NATUREZA_MECANICA_ENERGIA,
  LIVRO_HUMANAS_BRASIL_CONTEMPORANEO,
  LIVRO_HUMANAS_FILOSOFIA_SOCIOLOGIA,
  LIVRO_HUMANAS_GEOGRAFIA_GEOPOLITICA,
  BOOK_LINGUAGENS_GENEROS_ARGUMENTACAO,
  LIVRO_LINGUAGENS_LITERATURA_ARTES,
  BOOK_REDACAO_MANUAL_NOTA_1000
];

export const BOOKS_BY_AREA = {
  matematica: [
    LIVRO_MATEMATICA_FUNCOES, 
    LIVRO_MATEMATICA_FUNDAMENTOS,
    LIVRO_MATEMATICA_GEOMETRIA_ESPACIAL,
    LIVRO_MATEMATICA_ESTATISTICA_PROBABILIDADE
  ],
  natureza: [
    LIVRO_NATUREZA_ELETRODINAMICA, 
    LIVRO_NATUREZA_ECOLOGIA,
    LIVRO_NATUREZA_QUIMICA_ORGANICA,
    LIVRO_NATUREZA_GENETICA_BIOTECNOLOGIA,
    LIVRO_NATUREZA_FISICO_QUIMICA,
    LIVRO_NATUREZA_MECANICA_ENERGIA
  ],
  humanas: [
    LIVRO_HUMANAS_BRASIL_CONTEMPORANEO,
    LIVRO_HUMANAS_FILOSOFIA_SOCIOLOGIA,
    LIVRO_HUMANAS_GEOGRAFIA_GEOPOLITICA
  ],
  linguagens: [
    BOOK_LINGUAGENS_GENEROS_ARGUMENTACAO,
    LIVRO_LINGUAGENS_LITERATURA_ARTES
  ],
  redacao: [BOOK_REDACAO_MANUAL_NOTA_1000]
};

export const getBookById = (id) => ALL_ENEM_BOOKS.find((b) => b.id === id) || null;

export const getChapter = (bookId, chapterId) => {
  const book = getBookById(bookId);
  if (!book) return null;
  const chapter = book.chapters.find((c) => c.id === chapterId || c.chapterNumber === chapterId);
  return chapter ? { book, chapter } : null;
};

