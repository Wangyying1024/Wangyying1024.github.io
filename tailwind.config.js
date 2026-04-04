/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'background-deep': '#020203',
        'background-base': '#050506',
        'background-elevated': '#0a0a0c',
        'surface': 'rgba(255, 255, 255, 0.05)',
        'surface-hover': 'rgba(255, 255, 255, 0.08)',
        // 文字颜色 - 使用纯白色+不同透明度
        'foreground': 'rgba(255, 255, 255, 1)',        // 主标题 - 100%白色
        'foreground-primary': 'rgba(255, 255, 255, 0.95)',  // 次要标题 - 95%白色
        'foreground-secondary': 'rgba(255, 255, 255, 0.65)', // 正文 - 65%白色
        'foreground-muted': 'rgba(255, 255, 255, 0.65)',     // 辅助文字 - 65%白色
        'foreground-subtle': 'rgba(255, 255, 255, 0.45)',    // 提示文字 - 45%白色
        // 新的蓝紫渐变色系统
        'accent': '#2C7CFD',  // 荧光青蓝 (主色调)
        'accent-bright': '#9F2AD2',  // 荧光紫 (辅助色)
        'accent-purple': '#8B10BF',  // 深紫 (强调色)
        'accent-cyan': '#2C7CFD',  // 荧光青蓝
        'accent-glow': 'rgba(44, 124, 253, 0.3)',  // 青蓝光晕
        'accent-glow-purple': 'rgba(159, 42, 210, 0.3)',  // 紫色光晕
        'border-default': 'rgba(255, 255, 255, 0.06)',
        'border-hover': 'rgba(255, 255, 255, 0.10)',
        'border-accent': 'rgba(44, 124, 253, 0.30)',  // 青蓝边框
        'primary-container': 'linear-gradient(135deg, #2C7CFD 0%, #8B10BF 100%)',  // 渐变容器
      },
      fontFamily: {
        'headline': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'label': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-cyan-purple': 'linear-gradient(135deg, #2C7CFD 0%, #8B10BF 100%)',
        'gradient-purple-cyan': 'linear-gradient(135deg, #8B10BF 0%, #2C7CFD 100%)',
        'gradient-accent-full': 'linear-gradient(135deg, #2C7CFD 0%, #9F2AD2 50%, #8B10BF 100%)',
        'gradient-radial-cyan': 'radial-gradient(circle, #2C7CFD 0%, transparent 70%)',
        'gradient-radial-purple': 'radial-gradient(circle, #8B10BF 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
