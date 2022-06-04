  // @ts-nocheck
  let numberOfColors = 320;
  let boxSize = 480 / numberOfColors;
  let pallette = new Array(numberOfColors).fill(0)

  const elem = document.createElement('div')

  function getRgb(color) {
    let [r, g, b] = color.replace('rgb(', '')
      .replace(')', '')
      .split(',')
      .map(str => Number(str));
    return {
      r,
      g,
      b
    }
  }

  function colorInterpolate(colorA, colorB, intval) {
    const rgbA = getRgb(colorA),
      rgbB = getRgb(colorB);
    const colorVal = (prop) =>
      Math.round(rgbA[prop] * (1 - intval) + rgbB[prop] * intval);
    return {
      r: colorVal('r'),
      g: colorVal('g'),
      b: colorVal('b'),
    }
  }
  // ===============
  // let defColor1 = '#a435f0'
  let defColor1 = '#4e89fd'
  let defColor2 = '#ff1154'
  let defColor3 = '#efd300'

  let color1 = document.createElement('div')
  color1.classList.add('color')
  color1.style.cssText = `
  display: inline-block;
  position: absolute;
  touch-action: none;
  `
  color1.style.left = Math.round(480 * 0.07) + 'px'
  color1.dataset.range = Math.round(numberOfColors * 0.07)

  let color2 = document.createElement('div')
  color2.classList.add('color')
  color2.style.cssText = `
  display: inline-block;
  position: absolute;
  touch-action: none;
  `
  color2.style.left = Math.round(480 * 0.35) + 'px'
  color2.dataset.range = Math.round(numberOfColors * 0.35)

  let color3 = document.createElement('div')
  color3.classList.add('color')
  color3.style.cssText = `
  display: inline-block;
  position: absolute;
  touch-action: none;
  `
  color3.style.left = Math.round(480 * 0.9) + 'px'
  color3.dataset.range = Math.round(numberOfColors * 0.9)

  let label1 = document.createElement('label')
  label1.setAttribute('for', 'col1')
  label1.style.cssText = `
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  border-width: 0.3em;
  border-style: solid;
  border-radius: 50%;
  border-bottom-right-radius: 0%;
  transform: rotate(45deg);
  cursor: pointer;
  overflow: hidden;`
  label1.style.borderColor = defColor1

  let pickColor1 = document.createElement('input')
  pickColor1.style.cssText = `
  position: absolute;
  margin-top: -6px;
  margin-left: 8px;
  width: 0px;
  height: 0px;
  overflow: hidden;
  z-index: -2;
  `
  pickColor1.setAttribute('type', 'color')
  pickColor1.setAttribute('id', 'col1')
  pickColor1.setAttribute('value', defColor1)

  let curcle1 = document.createElement('div')
  curcle1.style.cssText = `
  width: 0px;
  margin-left: 2px;
  margin-top: 11px;
  border-width: 8px;
  border-bottom-width: 15px;
  border-style: solid;
  border-color: transparent;
  border-bottom-color: #ffffff;
  border-radius: 3px;
  cursor: pointer;
  `

  let label2 = document.createElement('label')
  label2.setAttribute('for', 'col2')
  label2.style.cssText = `
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  border-width: 0.3em;
  border-style: solid;
  border-radius: 50%;
  border-bottom-right-radius: 0%;
  transform: rotate(45deg);
  cursor: pointer;
  overflow: hidden;
  `
  label2.style.borderColor = defColor2

  let pickColor2 = document.createElement('input')
  pickColor2.style.cssText = `
  position: absolute;
  margin-top: -6px;
  margin-left: 8px;
  width: 0px;
  height: 0px;
  overflow: hidden;
  z-index: -2;`
  pickColor2.setAttribute('type', 'color')
  pickColor2.setAttribute('id', 'col2')
  pickColor2.setAttribute('value', defColor2)

  let curcle2 = document.createElement('div')
  curcle2.style.cssText = `
  width: 0px;
  margin-left: 2px;
  margin-top: 11px;
  border-width: 8px;
  border-bottom-width: 15px;
  border-style: solid;
  border-color: transparent;
  border-bottom-color: #ffffff;
  border-radius: 3px;
  cursor: pointer;
  `

  let label3 = document.createElement('label')
  label3.setAttribute('for', 'col3')
  label3.style.cssText = `
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  border-width: 0.3em;
  border-style: solid;
  border-radius: 50%;
  border-bottom-right-radius: 0%;
  transform: rotate(45deg);
  cursor: pointer;
  overflow: hidden;`
  label3.style.borderColor = defColor3

  let pickColor3 = document.createElement('input')
  pickColor3.style.cssText = `
  position: absolute;
  margin-top: -6px;
  margin-left: 8px;
  width: 0px;
  height: 0px;
  overflow: hidden;
  z-index: -2;
  `
  pickColor3.setAttribute('type', 'color')
  pickColor3.setAttribute('id', 'col3')
  pickColor3.setAttribute('value', defColor3)

  let curcle3 = document.createElement('div')
  curcle3.style.cssText = `
  width: 0px;
  margin-left:2px;
  margin-top: 11px;
  border-width: 8px;
  border-bottom-width: 15px;
  border-style: solid;
  border-color: transparent;
  border-bottom-color: #ffffff;
  border-radius: 3px;
  cursor: pointer;
  `

  let colorsLine = document.createElement('div')
  colorsLine.style.width = '480px'
  colorsLine.style.height = '15px'
  colorsLine.style.marginTop = '25px'
  colorsLine.style.marginLeft = '10px'

  let arrColors = new Array(numberOfColors).fill(0).map(e => {
    let box = document.createElement('div')
    box.style.display = 'inline-block'
    box.style.width = boxSize + 'px'
    box.style.height = '15px'
    box.style.backgroundColor = defColor1

    return box;
  })

  elem.append(color1)
  color1.append(label1)
  color1.append(curcle1)
  label1.append(pickColor1)

  elem.append(color2)
  color2.append(label2)
  color2.append(curcle2)
  label2.append(pickColor2)

  elem.append(color3)
  color3.append(label3)
  color3.append(curcle3)
  color3.append(pickColor3)

  elem.append(colorsLine)

  document.querySelectorAll('.color').forEach(e => {
    e.addEventListener('input', (event) => {
      e.querySelector('label').style.borderColor = event.target.value
      changeColors(event.target.closest('.color'), arrColors)
    })

    e.ondragstart = function () {
      return false
    }

    e.addEventListener('pointerdown', (event) => {
      function moveAt(pageX) {
        if (pageX >= 20 && pageX <= 480 + 20) {
          e.style.left = pageX - 20 + `px`
        }
      }

      function onPointerMove(event) {

        e.setPointerCapture(event.pointerId)

        moveAt(event.pageX)

        e.dataset.range = Math.round((parseInt(e.style.left)) / boxSize)
        changeColors(event.target.closest('.color'), arrColors)
      }
      
      document.addEventListener('pointermove', onPointerMove)
      
      document.onpointerup = function () {
        document.removeEventListener('pointermove', onPointerMove)
        document.onpointerup = null
      }
    })
  })

  function changeColors(elem, arrColors) {
    let startElem = elem.previousElementSibling ? elem.previousElementSibling : elem
    let startIndex = (startElem != elem) ? Number(startElem.dataset.range) : 0;

    let activeIndex = Number(elem.dataset.range)

    let endElem = elem.nextElementSibling.closest('.color') ? elem.nextElementSibling.closest('.color') : elem
    let endIndex = (endElem != elem) ? Number(endElem.dataset.range) : numberOfColors;
    
    function colorFill(start, end, startElem, endElem) {
      for (let i = start; i < end; i++) {
        let interval = 1 / (end - start) * (i - start);

        let pickColor1 = startElem.querySelector('label').style.borderColor
        let pickColor2 = endElem.querySelector('label').style.borderColor
        let rgbNew = colorInterpolate(pickColor1, pickColor2, interval)

        let newColor = `rgb( ${rgbNew.r}, ${rgbNew.g}, ${rgbNew.b})`

        arrColors[i].style.backgroundColor = newColor
        pallette[i] = newColor
      }
    }

    colorFill(startIndex, activeIndex, startElem, elem)
    colorFill(activeIndex, endIndex, elem, endElem)
  }

  document.querySelectorAll('.color').forEach(e => changeColors(e, arrColors))

  arrColors.forEach(e => colorsLine.append(e))
