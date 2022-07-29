import { useState } from 'react';
import { GuildContext } from '../utils/contexts/GuildContext';
import '../utils/styles/globals.scss'
import { AppPropsWithLayout, Guild } from '../utils/types'


function MyApp({ Component, pageProps }: AppPropsWithLayout<any>) {
  const [guild, setGuild] = useState<Guild>();
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <GuildContext.Provider value={{ guild, setGuild }}>
      {getLayout(<Component {...pageProps} />)}
    </GuildContext.Provider>
  )
}

export default MyApp
