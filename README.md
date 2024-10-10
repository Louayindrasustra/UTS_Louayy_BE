# PROYEK DATABASE 
Disini saya membuat sebuah 

## Penjelasan Relasi
1. Volunteers dan Volunteer_Contributions:
- Setiap volunteer dapat memberikan kontribusi dalam banyak events, sehingga ada relasi satu ke banyak (one-to-many) antara volunteers dan volunteer_contributions. Setiap catatan di volunteer_contributions merepresentasikan satu kontribusi volunteer dalam satu event.

2. vents dan Volunteer_Contributions:
- Setiap event dapat melibatkan banyak volunteers. Oleh karena itu, ada relasi satu ke banyak (one-to-many)  - antara events dan volunteer_contributions.

3. Roles dan Volunteer_Contributions:
- Setiap kontribusi volunteer dalam event dapat memiliki satu peran tertentu (role). Ini menciptakan relasi satu ke banyak (one-to-many) antara roles dan volunteer_contributions.

4. Organizations dan Events:
- Setiap event diorganisir oleh satu organization, tetapi satu organization dapat mengorganisir banyak events. Ini merupakan relasi satu ke banyak (one-to-many) antara organizations dan events.