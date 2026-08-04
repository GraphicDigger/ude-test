import React, { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

/**
 * Карточка: картинка сверху, подпись снизу.
 *
 * Картинка по абсолютному адресу, а не путём из `public/`: превью экрана живёт
 * в песочнице редактора, и корневой путь там указывает на его origin, а не на
 * этот проект — `/файл.jpg` возвращал бы index.html вместо изображения.
 *
 * Заготовка для проверки повтора по записям: экран `Screen-repeat-test`
 * показывает её дважды — составным элементом и инстансом этого компонента, —
 * чтобы к обеим формам можно было подключить коллекцию и сравнить результат.
 */
export const Card = ({
  text = 'Card is a Component instance',
  image = 'https://raw.githubusercontent.com/GraphicDigger/ude-test/main/public/markus-spiske-pZJ9M8Jxp_o-unsplash.jpg',
  ...rest
}: {
  text?: string;
  image?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const theme = useContext(ThemeContext);
  const surface = theme?.sys?.surface ?? '#FFFFFF';
  const onSurface = theme?.sys?.onSurface ?? '#111111';
  const outline = theme?.sys?.outline ?? '#E5E5E5';

  return (
    <div
      {...rest}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '220px',
        padding: '12px',
        border: `1px solid ${outline}`,
        borderRadius: '12px',
        backgroundColor: surface,
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          width: '100%',
          height: '120px',
          objectFit: 'cover',
          borderRadius: '8px',
          backgroundColor: '#F3F4F6',
        }}
      />
      <span style={{ fontSize: '15px', lineHeight: '20px', color: onSurface }}>{text}</span>
    </div>
  );
};
