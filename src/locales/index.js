import I18n from 'react-native-i18n'

I18n.fallbacks = true

// Should live in Dat or SSB
I18n.translations = {
  en: {
    profile: 'Profile',
    network: 'Network',
    applications: 'Applications',
    name: 'Name',
    publicKey: 'Public key',
    loadingServer: 'Loading server'
  },
  pt: {
    profile: 'Perfil',
    network: 'Rede',
    applications: 'Aplicativos',
    name: 'Nome',
    publicKey: 'Chave pública',
    loadingServer: 'Carregando o servidor'
  },
}

export default I18n