import React, { useEffect, useState } from 'react';
import { Button } from './Button';

// Функция для отправки данных родителю
const sendParentMessage = (type: string, payload: any) => {
  const targetOrigin = '*'; // В продакшне используйте конкретный origin
  console.log('[App] Отправка сообщения:', { type, payload });
  
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ type, payload }, targetOrigin);
  } else {
    console.warn('[App] window.parent недоступен');
  }
};

// Получение вычисленных стилей элемента
const getComputedStyles = (element: HTMLElement) => {
  if (!element) return {};
  
  try {
    const computed = window.getComputedStyle(element);
    return {
      display: computed.display,
      position: computed.position,
      width: computed.width,
      height: computed.height,
      color: computed.color,
      backgroundColor: computed.backgroundColor,
      fontSize: computed.fontSize,
      margin: computed.margin,
      padding: computed.padding
    };
  } catch (e) {
    console.error('[App] Ошибка при получении стилей:', e);
    return {};
  }
};

// Получение атрибутов элемента
const getAttributes = (element: HTMLElement) => {
  const result: Record<string, string> = {};
  if (!element || !element.attributes) return result;
  
  try {
    for (let i = 0; i < element.attributes.length; i++) {
      const attr = element.attributes[i];
      result[attr.name] = attr.value;
    }
    return result;
  } catch (e) {
    console.error('[App] Ошибка при получении атрибутов:', e);
    return result;
  }
};

// Получение информации об элементе
const getElementInfo = (element: HTMLElement) => {
  if (!element) return null;
  
  try {
    const rect = element.getBoundingClientRect();
    return {
      id: element.id || null,
      tagName: element.tagName.toLowerCase(),
      className: element.className || '',
      textContent: element.textContent ? element.textContent.slice(0, 100) : '',
      metrics: {
        size: { 
          width: rect.width, 
          height: rect.height 
        },
        position: { 
          top: rect.top, 
          left: rect.left, 
          bottom: rect.bottom, 
          right: rect.right 
        },
        computed: getComputedStyles(element),
        attributes: getAttributes(element)
      }
    };
  } catch (e) {
    console.error('[App] Ошибка при получении информации об элементе:', e);
    return {
      error: (e as Error).message,
      tagName: element?.tagName?.toLowerCase() || 'unknown'
    };
  }
};

const App = () => {
  // Флаг загрузки компонента
  const [isLoaded, setIsLoaded] = useState(false);
  
  // При монтировании компонента
  useEffect(() => {
    console.log('[App] window.parent:', window.parent);
        try {
            console.log('[App] window.parent.origin:', window.parent.origin);
        } catch (e) {
            console.error('[App] Не удалось получить window.parent.origin:', e);
        }
    
    // Сообщаем родителю, что iframe готов
    sendParentMessage('IFRAME_READY', { url: window.location.href });
    setIsLoaded(true);
    
    // Обработчик клика
    const handleClick = (e: MouseEvent) => {
      const targetElement = e.target as HTMLElement;
      
      // Показываем визуальный маркер клика
      const clickMarker = document.createElement('div');
      clickMarker.style.position = 'absolute';
      clickMarker.style.width = '10px';
      clickMarker.style.height = '10px';
      clickMarker.style.borderRadius = '50%';
      clickMarker.style.backgroundColor = 'red';
      clickMarker.style.top = `${e.clientY - 5}px`;
      clickMarker.style.left = `${e.clientX - 5}px`;
      clickMarker.style.zIndex = '9999';
      clickMarker.style.pointerEvents = 'none';
      document.body.appendChild(clickMarker);
      setTimeout(() => clickMarker.parentNode?.removeChild(clickMarker), 500);
      
      // Обрабатываем элемент только если это не body и не html
      if (targetElement && targetElement !== document.body && targetElement !== document.documentElement) {
        // Получаем информацию об элементе
        const elementData = getElementInfo(targetElement);
        console.log('[App] Клик по элементу:', elementData);
        
        // Подсвечиваем элемент на короткое время
        if (targetElement) {
          const originalOutline = targetElement.style.outline;
          targetElement.style.outline = '2px dashed red';
          setTimeout(() => {
            targetElement.style.outline = originalOutline;
          }, 1000);
        }
        
        // Отправляем информацию об элементе родителю
        sendParentMessage('ELEMENT_CLICKED_INSIDE', elementData);
      }
    };
    
    // Устанавливаем обработчик клика
    document.addEventListener('click', handleClick, true);
    
    // Очистка при размонтировании
    return () => {
      document.removeEventListener('click', handleClick, true);
      console.log('[App] Обработчик клика удален');
    };
  }, []);
  
  return (
    <div className="app-container">
      {isLoaded ? (
        <Button />
      ) : (
        <div>Загрузка компонента...</div>
      )}
    </div>
  );
};

export default App;
