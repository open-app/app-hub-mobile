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
    loadingServer: 'Loading server',
    notificationTitle: 'Conected to the ecosystem',
    notificationAction: 'Stop server',
    notificationMessage: 'Touch to open the application hub',
    
  },
  pt: {
    profile: 'Perfil',
    network: 'Rede',
    applications: 'Aplicativos',
    name: 'Nome',
    publicKey: 'Chave pública',
    loadingServer: 'Carregando o servidor',
    notificationTitle: 'Conectado ao ecosistema',
    notificationAction: 'Para servidor',
    notificationMessage: 'Toque para abrir o aplicativo',
  },
}

export default I18n