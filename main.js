const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500
document.body.appendChild(canvas)

const drawGlowingText = (text, x, y, font, glowColor, glowStrength) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.font = font
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  // Настройка свечения
  ctx.shadowColor = glowColor
  ctx.shadowBlur = glowStrength

  // Рисуем текст с свечением
  ctx.fillStyle = 'white'
  ctx.fillText(text, x, y)
}

// Анимация свечения
const animateGlow = () => {
  let glowStrength = 10
  let direction = 1

  const animate = () => {
    drawGlowingText('ば', canvas.width / 2, canvas.height / 2, 'bold 200px Arial', 'cyan', glowStrength)

    // Изменяем силу свечения для эффекта пульсации
    glowStrength += direction
    if (glowStrength > 30 || glowStrength < 10) {
      direction *= -1
    }

    requestAnimationFrame(animate)
  }

  animate()
}

animateGlow()