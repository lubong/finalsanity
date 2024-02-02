import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { iconPicker } from 'sanity-plugin-icon-picker';

export default defineConfig({
  name: 'default',
  title: 'finalsanity',

  projectId: '79gm6w2j',
  dataset: 'production',
  useCdn: true,

  plugins: [structureTool(), visionTool(), iconPicker()],

  schema: {
    types: schemaTypes,
  },
})
