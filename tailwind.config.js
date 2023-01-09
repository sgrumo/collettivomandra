module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fcr': "url('https://i.vimeocdn.com/video/1558475859-f98fffe8b9ae518dae5271643615759f3b4ed879a1d4e449cd1d3fd83eeafb76-d_640x360?r=pad')",
        'majani': "url('https://i.vimeocdn.com/video/1558477075-8d4f39f6ebe5aaf5905d50d3f30e508222b44989f459cfc6fd0b589b0c91b4ea-d_640x360?r=pad')",
        'zanichelli': "url('https://i.vimeocdn.com/video/1561669232-17bc29438b00f39d488175d6c6e742283b8a0828329037dbad915644609aaa59-d_640x360?r=pad')",
        'tassoni': "url('https://i.vimeocdn.com/video/1561666027-027a92237e5c439f64030a517a604553577c20c29ef226928e063aabe247f3e1-d_640x360?r=pad')",
        'subme': "url('https://i.vimeocdn.com/video/1561668121-e8535cdd53d2afcfbb9cae3a44369e714b2e3d5b03bb8f31e6e67e84f69d5d4e-d_640x360?r=pad')",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'marquee-infinite': 'marquee 35s linear infinite',
      },
    },
  },
  plugins: [],
}
