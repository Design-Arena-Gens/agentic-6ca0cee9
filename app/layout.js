export const metadata = {
  title: 'Intelliwave - Agence d\'Automatisation AI & Chatbots sur Mesure',
  description: 'Spécialiste en création de chatbots intelligents avec n8n. Automatisez vos processus et améliorez votre relation client.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
