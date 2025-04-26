from datetime import datetime, timedelta

def validate_time(time_str):
    """Проверяет корректность формата времени HH:MM"""
    try:
        if len(time_str) != 5 or time_str[2] != ':':
            return False
        hours = int(time_str[:2])
        minutes = int(time_str[3:])
        return 0 <= hours <= 23 and 0 <= minutes <= 59
    except ValueError:
        return False

def time_to_minutes(time_str):
    """Конвертирует время в минуты от начала дня"""
    return int(time_str[:2]) * 60 + int(time_str[3:])

def minutes_to_time(minutes):
    """Конвертирует минуты в формат HH:MM"""
    return f"{minutes // 60:02d}:{minutes % 60:02d}"

class ConferenceReport:
    def __init__(self, theme, start_time, duration):
        self.theme = theme
        self.start_time = start_time
        self.duration = duration
        self.start_minutes = time_to_minutes(start_time)
        self.end_minutes = self.start_minutes + time_to_minutes(duration)
    
    def __repr__(self):
        end_time = minutes_to_time(self.end_minutes)
        return f"{self.theme} ({self.start_time}-{end_time}, {self.duration})"

class ConferenceManager:
    def __init__(self):
        self.reports = []
    
    def add_report(self, report):
        """Добавляет доклад с проверкой пересечений"""
        for existing in self.reports:
            if (report.start_minutes < existing.end_minutes and 
                report.end_minutes > existing.start_minutes):
                print(f"Ошибка: время пересекается с докладом '{existing.theme}'")
                return False
        
        self.reports.append(report)
        self.reports.sort(key=lambda x: x.start_minutes)
        print(f"Доклад '{report.theme}' успешно добавлен")
        return True
    
    def total_duration(self):
        """Суммарная продолжительность всех докладов"""
        return sum(time_to_minutes(r.duration) for r in self.reports)
    
    def max_break(self):
        """Самый длинный перерыв между докладами"""
        if len(self.reports) < 2:
            return 0
        
        breaks = []
        for i in range(1, len(self.reports)):
            prev_end = self.reports[i-1].end_minutes
            curr_start = self.reports[i].start_minutes
            breaks.append(curr_start - prev_end)
        
        return max(breaks) if breaks else 0
    
    def print_schedule(self):
        """Выводит расписание с статистикой"""
        print("\n=== Расписание конференции ===")
        for i, report in enumerate(self.reports, 1):
            print(f"{i}. {report}")
        
        print("\nСтатистика:")
        print(f"Общее время докладов: {minutes_to_time(self.total_duration())}")
        print(f"Самый длинный перерыв: {minutes_to_time(self.max_break())}")
        print("="*30)

def input_time(prompt):
    """Запрашивает время с валидацией"""
    while True:
        time = input(prompt)
        if validate_time(time):
            return time
        print("Некорректный формат времени. Используйте HH:MM (например, 09:30)")

def main():
    manager = ConferenceManager()
    
    while True:
        print("\nМеню:")
        print("1. Добавить доклад")
        print("2. Показать расписание")
        print("3. Выйти")
        
        choice = input("Выберите действие: ")
        
        if choice == "1":
            print("\nДобавление нового доклада:")
            theme = input("Тема доклада: ").strip()
            start_time = input_time("Время начала (HH:MM): ")
            duration = input_time("Продолжительность (HH:MM): ")
            
            report = ConferenceReport(theme, start_time, duration)
            manager.add_report(report)
        
        elif choice == "2":
            manager.print_schedule()
        
        elif choice == "3":
            print("Работа программы завершена")
            break
        
        else:
            print("Некорректный ввод. Пожалуйста, выберите 1, 2 или 3")

if __name__ == "__main__":
    main()