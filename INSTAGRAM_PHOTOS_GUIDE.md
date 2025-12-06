# Como Adicionar Fotos do Instagram ao Portfólio

## 📸 Extraindo Fotos do Instagram

### Método 1: Download Manual (Mais Fácil)

1. **Abra o Instagram no navegador desktop**
   - Vá para o perfil: https://www.instagram.com/vinnyfilmsofc/

2. **Abra a publicação que você quer**
   - Clique na foto/vídeo

3. **Salve a imagem**
   - Clique com botão direito na imagem
   - "Salvar imagem como..."
   - OU use: https://snapinsta.app/ ou https://inflact.com/downloader/instagram/photo/

4. **Renomeie e organize**
   - Salve em: `public/assets/gallery/`
   - Nomes sugeridos: `img1.jpg`, `img2.jpg`, etc.

### Método 2: Screenshot de Stories/Reels

1. Abra o story/reel no celular
2. Tire screenshot
3. Transfira para o PC
4. Salve em `public/assets/gallery/`

### Método 3: Ferramentas Online

**Para Posts:**
- https://snapinsta.app/
- https://inflact.com/downloader/instagram/photo/
- https://instadownloader.io/

**Para Reels:**
- https://snapinsta.app/pt/instagram-reels-downloader
- https://saveinsta.io/

## 📂 Estrutura de Pastas

Crie as pastas se não existirem:

```
public/
├── assets/
│   ├── pdf-images/         (fotos de perfil)
│   │   ├── perfil 0.png
│   │   ├── perfil 2.png
│   │   └── perfil.png
│   └── gallery/            (fotos de projetos)
│       ├── img1.jpg
│       ├── img2.jpg
│       ├── img3.jpg
│       ├── img4.jpg
│       ├── img5.jpg
│       └── img6.jpg
```

## 🎨 Dicas de Fotos

**Para Works Section:**
- Fotos de trabalhos finalizados
- Capturas de tela de posts
- Fotos de antes/depois

**Para Gallery Section:**
- Melhores projetos
- Variedade de conteúdos
- Fotos de alta qualidade

## 🔧 Após Adicionar as Fotos

**NÃO PRECISA ALTERAR CÓDIGO!** As fotos já estão configuradas para:
- `Works Section`: Usa números placeholder
- `Gallery Section`: Usa estrutura de array

Se quiser usar imagens reais no Works, edite `src/utils/constants.ts`:

```typescript
works: [
  {
    year: '2025',
    title: 'Clínica Mais Vida',
    image: '/assets/gallery/clinica.jpg', // <- adicione aqui
    // ...
  },
]
```

## ✅ Checklist

- [ ] Criar pasta `/public/assets/gallery/`
- [ ] Baixar 6+ fotos dos trabalhos
- [ ] Renomear como img1.jpg, img2.jpg, etc.
- [ ] (Opcional) Atualizar constants.ts com nomes das imagens
- [ ] Verificar no navegador

## 🚀 Exemplos de Posts para Usar

**Perfis para extrair:**
- https://www.instagram.com/iriribarbeariaclub/
- https://www.instagram.com/clinicamaisvida_/
- https://www.instagram.com/prefqueimados/
- https://www.instagram.com/unidadeeaduvanovaiguacu/

Escolha os melhores posts de cada perfil!
