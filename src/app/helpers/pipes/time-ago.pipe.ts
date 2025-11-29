import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeAgo', standalone: true })
export class TimeAgoPipe implements PipeTransform {

  transform(value: string | Date | null | undefined): string {
    if (!value) return '';
    // Обрезаем дробные секунды и добавляем Z, если нет таймзоны
    const str = value.toString().replace(/\.\d+/, '') + (value.toString().endsWith('Z') ? '' : 'Z');
    const date = new Date(str);
    const diff = Math.floor((Date.now() - date.getTime()) / 1000);

    if (diff < 5) return 'только что';
    if (diff < 60) return `${diff} секунд${diff === 1 ? '' : 'ы'} назад`;

    const m = Math.floor(diff / 60);
    if (m < 60) return `${m} минут${m === 1 ? '' : 'ы'} назад`;

    const h = Math.floor(m / 60);
    if (h < 24) return `${h} час${h === 1 ? '' : 'ов'} назад`;

    const d = Math.floor(h / 24);
    if (d === 1) return 'вчера';
    if (d < 7) return `${d} день${d === 1 ? '' : 'ей'} назад`;

    const w = Math.floor(d / 7);
    if (w < 5) return `${w} недел${w === 1 ? 'я' : 'ь'} назад`;

    const mon = Math.floor(d / 30);
    if (mon < 12) return `${mon} месяц${mon === 1 ? '' : 'ев'} назад`;

    const y = Math.floor(d / 365);
    return `${y} год${y === 1 ? '' : 'а'} назад`;
  }
}
