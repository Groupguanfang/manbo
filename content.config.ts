import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const BilibiliSource = z.object({
  sourceType: z.literal('bilibili').describe('资源来源类型 (哔哩哔哩)'),
  bvid: z.string().describe('Bilibili 视频的 BVID'),
  human: z.boolean().optional().describe('是否为人类演唱'),
})

const NeteaseSource = z.object({
  sourceType: z.literal('netease').describe('资源来源类型 (网易云音乐)'),
  songId: z.string().describe('网易云音乐的歌曲 ID'),
  human: z.boolean().optional().describe('是否为人类演唱'),
})

const Source = z.union([BilibiliSource, NeteaseSource]).describe('资源来源类型，支持哔哩哔哩和网易云音乐')

export default defineContentConfig({
  collections: {
    resources: defineCollection({
      type: 'page',
      source: 'resources/*.md',
      schema: z.object({
        title: z.string().describe('该哈基米音乐的标题'),
        adaptedFrom: z.string().describe('该哈基米音乐的来源'),
        sources: z.array(Source).describe('该哈基米音乐的可用资源列表'),
      }),
    }),
  },
})
