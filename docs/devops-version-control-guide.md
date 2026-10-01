# 🛠️ Guia DevOps de Controle de Versão & Rollback

Este documento é o guia de operações para você manter o site **"Nosso Universo"** sempre estável, versionado de forma profissional e com procedimentos claros de rollback em caso de falha.

---

## 📌 1. Padrão de Versionamento Semântico (SemVer)

O projeto segue a convenção `MAJOR.MINOR.PATCH` (ex: `1.0.0`):
* **MAJOR (1.x.x):** Grandes reformulações de arquitetura ou mudanças incompatíveis.
* **MINOR (x.1.x):** Novas funcionalidades completas (ex: novo mapa, nova seção, novo player).
* **PATCH (x.x.1):** Correções de bugs, pequenas melhorias visuais ou ajustes de texto.

---

## 🏷️ 2. Como Criar uma Nova Versão / Tag

Sempre que concluir um conjunto de melhorias:

1. Atualize a versão no `package.json` (ou use o comando do npm):
   ```powershell
   npm version minor   # Para nova feature (ex: 1.0.0 -> 1.1.0)
   npm version patch   # Para correção de bug (ex: 1.0.0 -> 1.0.1)
   ```
2. Adicione uma entrada no `CHANGELOG.md`.
3. Crie e envie a tag semântica anotada para o GitHub:
   ```powershell
   git tag -a v1.0.0 -m "Release v1.0.0 - Auditoria completa, segurança, performance e novas features"
   git push origin master --tags
   ```

---

## ⏪ 3. Procedimentos de Rollback (Como Voltar Versões)

Se você publicar uma versão que apresentar qualquer comportamento indesejado em produção, utilize um dos métodos abaixo:

### Método A: Rollback Limpo via Git Revert (Mais Seguro para Produção)
Este método desfaz exatamente o último commit sem reescrever o histórico do Git:
```powershell
# 1. Cria um commit inverso que cancela as mudanças da versão ruim
git revert HEAD

# 2. Envia para o GitHub (o GitHub Actions fará o build e deploy da versão anterior automaticamente)
git push origin master
```

### Método B: Restaurar uma Tag Antiga Específica
Se você quiser restaurar o site exatamente como estava em uma versão anterior (ex: `v0.1.0`):
```powershell
# 1. Listar todas as versões salvas
git tag -l

# 2. Criar uma branch de restauração a partir da tag anterior
git checkout -b rollback-para-v0.1.0 v0.1.0

# 3. Forçar ou mesclar na master
git checkout master
git reset --hard v0.1.0
git push origin master --force
```

### Método C: Re-Deploy de Execução Anterior no GitHub Actions
1. Acesse o repositório no GitHub: `https://github.com/FelipeAndradeSZ/namorados/actions`.
2. Clique na aba **Deploy to GitHub Pages**.
3. Selecione uma execução anterior que estava verde e funcionando.
4. Clique no botão **"Re-run all jobs"** no canto superior direito. O GitHub Pages voltará imediatamente para o build daquela execução.

---

## 🚦 4. Quality Gate da Esteira (CI/CD)

A esteira em `.github/workflows/deploy.yml` agora possui um **Quality Gate**:
1. Roda `npm run lint` (verifica erros de código, hooks e TypeScript/ESLint).
2. Se o lint falhar, o build é abortado e **o site em produção NÃO é quebrado**.
3. Se o lint passar, o Vite compila e o deploy é publicado no GitHub Pages.
