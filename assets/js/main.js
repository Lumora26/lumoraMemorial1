/**
 * ==========================================================================
 * ORQUESTRADOR CENTRAL - main.js (Módulo Entrada)
 * Importa todas as subfunções lógicas e resolve o problema de escopo global.
 * ==========================================================================
 */

// Importações lógicas dos módulos
import { openLightbox, closeLightbox } from './utils/lightbox.js';
import { inicializarMuralRealTime, handleLiveSubmit, previewImage, removePreview } from './modules/mural.js';

document.addEventListener("DOMContentLoaded", () => {
    // 1. Conecta ao Firebase e sincroniza o Mural de Carinho em tempo real [3]
    inicializarMuralRealTime();
});

// RESOLUÇÃO DE ESCOPO: Vincula os módulos à janela global "window" para os cliques do HTML funcionarem [1]
window.handleLiveSubmit = handleLiveSubmit;
window.previewImage = previewImage;
window.removePreview = removePreview;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;