import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/3D-BrainWave-Website/",
  assetsInclude: [
    '**/*.glb',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.svg',
    '**/*.gif',
    '**/*.webp',
    '**/*.ico',
    '**/*.json',
    '**/*.pdf',
    '**/*.zip',
    '**/*.rar',
    '**/*.tar',
    '**/*.gz',
    '**/*.bz2',
    '**/*.7z',
    '**/*.mp4',
    '**/*.mp3',
    '**/*.wav',
    '**/*.flac',
    '**/*.aac',
    '**/*.ogg',
    '**/*.wma',
    '**/*.m4a',
    '**/*.flv',
    '**/*.avi',
    '**/*.wmv',
    '**/*.mov',
    '**/*.webm',
    '**/*.mkv',
    '**/*.m4v',
    '**/*.ogv',
    '**/*.3gp',
    '**/*.3g2',
    '**/*.wmv',
    '**/*.flv',
    '**/*.ts',
    '**/*.m3u8',
    '**/*.pdf',
    '**/*.doc',
    '**/*.docx',
    '**/*.xls',
    '**/*.xlsx',
    '**/*.ppt',
    '**/*.pptx',
    '**/*.odt',
    '**/*.ods',
    '**/*.odp',
    '**/*.odg',
    '**/*.odf',
    '**/*.txt',
    '**/*.rtf',
    '**/*.csv',
    '**/*.tsv',
    '**/*.ics',
    '**/*.swf',
    '**/*.vtt',
    '**/*.srt',
    '**/*.sub',
    '**/*.sbv',
    '**/*.xml',
    '**/*.json',
    '**/*.yaml',
    '**/*.yml',
    '**/*.toml',
    '**/*.plist',
    '**/*.properties',
    '**/*.ini',
    '**/*.cfg',
    '**/*.conf',
    '**/*.env',
    '**/*.env.example',
    '**/*.env.local',
    '**/*.env.development',
    '**/*.env.test',
    '**/*.env.production'
  ],

  build: {
    sourcemap: true
  }
})
