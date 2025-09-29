// index.js - Main entry point for the quiz application

// Example question database with subject/domain tags
export const db = [
  // DBMS (50+)
  {
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Statement Question Language"],
    answer: "Structured Query Language",
    subject: "dbms"
  },
  {
    question: "Which of the following is a primary key property?",
    options: ["Unique", "Nullable", "Duplicate", "None of these"],
    answer: "Unique",
    subject: "dbms"
  },
  {
    question: "Which normal form removes partial dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: "2NF",
    subject: "dbms"
  },
  {
    question: "Which command is used to remove all records from a table in SQL?",
    options: ["DELETE", "REMOVE", "TRUNCATE", "DROP"],
    answer: "TRUNCATE",
    subject: "dbms"
  },
  {
    question: "Which SQL clause is used to filter the results?",
    options: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"],
    answer: "WHERE",
    subject: "dbms"
  },
  {
    question: "Which of the following is not a type of SQL join?",
    options: ["INNER JOIN", "OUTER JOIN", "CROSS JOIN", "UPPER JOIN"],
    answer: "UPPER JOIN",
    subject: "dbms"
  },
  {
    question: "Which command is used to remove a table from a database?",
    options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"],
    answer: "DROP",
    subject: "dbms"
  },
  {
    question: "Which of the following is a DDL command?",
    options: ["INSERT", "UPDATE", "CREATE", "SELECT"],
    answer: "CREATE",
    subject: "dbms"
  },
  {
    question: "Which key is used to uniquely identify a record in a table?",
    options: ["Foreign Key", "Primary Key", "Candidate Key", "Super Key"],
    answer: "Primary Key",
    subject: "dbms"
  },
  {
    question: "Which of the following is not a database model?",
    options: ["Hierarchical", "Network", "Relational", "Procedural"],
    answer: "Procedural",
    subject: "dbms"
  },
  {
    question: "Which SQL statement is used to extract data from a database?",
    options: ["GET", "OPEN", "SELECT", "EXTRACT"],
    answer: "SELECT",
    subject: "dbms"
  },
  {
    question: "Which of the following is used to prevent unauthorized access to the database?",
    options: ["Normalization", "Encryption", "Indexing", "Denormalization"],
    answer: "Encryption",
    subject: "dbms"
  },
  {
    question: "Which of the following is not a valid SQL data type?",
    options: ["VARCHAR", "INTEGER", "DATE", "CHARACTER"],
    answer: "CHARACTER",
    subject: "dbms"
  },
  {
    question: "Which of the following is not a constraint in SQL?",
    options: ["NOT NULL", "UNIQUE", "PRIMARY", "ORDER BY"],
    answer: "ORDER BY",
    subject: "dbms"
  },
  {
    question: "Which command is used to modify existing data in a table?",
    options: ["MODIFY", "UPDATE", "CHANGE", "ALTER"],
    answer: "UPDATE",
    subject: "dbms"
  },
  {
    question: "Which of the following is not a valid aggregate function in SQL?",
    options: ["SUM", "AVG", "COUNT", "ORDER"],
    answer: "ORDER",
    subject: "dbms"
  },
  {
    question: "Which of the following is used to remove duplicate rows from the result set?",
    options: ["DISTINCT", "UNIQUE", "REMOVE", "DELETE"],
    answer: "DISTINCT",
    subject: "dbms"
  },
  {
    question: "Which of the following is not a valid SQL operator?",
    options: ["BETWEEN", "LIKE", "IN", "OUT"],
    answer: "OUT",
    subject: "dbms"
  },
  {
    question: "Which of the following is used to combine the results of two SELECT statements?",
    options: ["JOIN", "UNION", "MERGE", "COMBINE"],
    answer: "UNION",
    subject: "dbms"
  },
  {
    question: "Which of the following is not a valid SQL clause?",
    options: ["WHERE", "GROUP BY", "ORDER BY", "SORT BY"],
    answer: "SORT BY",
    subject: "dbms"
  },
  // ...add 30+ more DBMS questions...
  // OS (50+)
  {
    question: "Which of the following is NOT an operating system?",
    options: ["Linux", "Windows", "Oracle", "macOS"],
    answer: "Oracle",
    subject: "os"
  },
  {
    question: "What is the core of an operating system called?",
    options: ["Shell", "Kernel", "Command", "Terminal"],
    answer: "Kernel",
    subject: "os"
  },
  {
    question: "Which scheduling algorithm is preemptive?",
    options: ["FCFS", "SJF", "Round Robin", "None"],
    answer: "Round Robin",
    subject: "os"
  },
  {
    question: "Which memory management technique suffers from external fragmentation?",
    options: ["Paging", "Segmentation", "Contiguous allocation", "Swapping"],
    answer: "Contiguous allocation",
    subject: "os"
  },
  {
    question: "Which OS is developed by Apple?",
    options: ["Windows", "Linux", "macOS", "Android"],
    answer: "macOS",
    subject: "os"
  },
  {
    question: "Which of the following is a real-time operating system?",
    options: ["Windows", "Linux", "RTOS", "DOS"],
    answer: "RTOS",
    subject: "os"
  },
  {
    question: "Which of the following is not a function of an operating system?",
    options: ["Process Management", "Memory Management", "Compiler Design", "Device Management"],
    answer: "Compiler Design",
    subject: "os"
  },
  {
    question: "Which of the following is not a type of operating system?",
    options: ["Batch", "Time-sharing", "Distributed", "Centralized"],
    answer: "Centralized",
    subject: "os"
  },
  {
    question: "Which of the following is not a process state?",
    options: ["Ready", "Running", "Blocked", "Waiting"],
    answer: "Waiting",
    subject: "os"
  },
  {
    question: "Which of the following is not a type of scheduler?",
    options: ["Long-term", "Medium-term", "Short-term", "Permanent"],
    answer: "Permanent",
    subject: "os"
  },
  // ...add 40+ more OS questions...
  // NETWORK (50+)
  {
    question: "What does LAN stand for?",
    options: ["Large Area Network", "Local Area Network", "Long Area Node", "Light Access Network"],
    answer: "Local Area Network",
    subject: "network"
  },
  {
    question: "Which device forwards data packets between computer networks?",
    options: ["Switch", "Router", "Hub", "Repeater"],
    answer: "Router",
    subject: "network"
  },
  {
    question: "Which protocol is used to send emails?",
    options: ["SMTP", "FTP", "HTTP", "SNMP"],
    answer: "SMTP",
    subject: "network"
  },
  {
    question: "What is the default port for HTTP?",
    options: ["21", "25", "80", "110"],
    answer: "80",
    subject: "network"
  },
  {
    question: "What does WAN stand for?",
    options: ["Wide Area Network", "Wireless Area Network", "Wired Area Network", "Web Area Network"],
    answer: "Wide Area Network",
    subject: "network"
  },
  {
    question: "Which protocol is used for secure communication over a computer network?",
    options: ["HTTP", "HTTPS", "FTP", "SMTP"],
    answer: "HTTPS",
    subject: "network"
  },
  {
    question: "Which of the following is not a network topology?",
    options: ["Star", "Ring", "Bus", "Circle"],
    answer: "Circle",
    subject: "network"
  },
  {
    question: "Which layer of the OSI model is responsible for routing?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    answer: "Network",
    subject: "network"
  },
  {
    question: "Which device connects different networks together?",
    options: ["Switch", "Router", "Hub", "Repeater"],
    answer: "Router",
    subject: "network"
  },
  {
    question: "Which protocol is used to transfer files over the Internet?",
    options: ["SMTP", "FTP", "HTTP", "SNMP"],
    answer: "FTP",
    subject: "network"
  },
  // ...add 40+ more NETWORK questions...
  // General Knowledge (50+)
  {
    question: "Who is known as the father of computers?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    answer: "Charles Babbage",
    subject: "gk"
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
    subject: "gk"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
    subject: "gk"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare",
    subject: "gk"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
    subject: "gk"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "India"],
    answer: "Japan",
    subject: "gk"
  },
  {
    question: "Who invented the telephone?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Isaac Newton"],
    answer: "Alexander Graham Bell",
    subject: "gk"
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
    subject: "gk"
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile",
    subject: "gk"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci",
    subject: "gk"
  },
  // ...add 40+ more GK questions...

  // Reasoning (50+)
  {
    question: "If in a code, DOG is written as GOD, how is CAT written?",
    options: ["TAC", "ATC", "ACT", "CTA"],
    answer: "TAC",
    subject: "reasoning"
  },
  {
    question: "Find the next number in the series: 2, 4, 8, 16, ?",
    options: ["18", "24", "32", "20"],
    answer: "32",
    subject: "reasoning"
  },
  {
    question: "Which one is different from the rest? Apple, Banana, Carrot, Mango",
    options: ["Apple", "Banana", "Carrot", "Mango"],
    answer: "Carrot",
    subject: "reasoning"
  },
  {
    question: "If 1=3, 2=3, 3=5, 4=4, 5=4, then 6=?",
    options: ["3", "4", "5", "6"],
    answer: "3",
    subject: "reasoning"
  },
  {
    question: "Which word cannot be formed from the letters of 'INTERNATIONAL'?",
    options: ["NATION", "TRAIN", "TAILOR", "RATION"],
    answer: "TAILOR",
    subject: "reasoning"
  },
  {
    question: "If TABLE is coded as GZYOV, how is CHAIR coded?",
    options: ["XSLMV", "XZMVL", "XZLVM", "XZMLV"],
    answer: "XZLVM",
    subject: "reasoning"
  },
  {
    question: "Find the odd one out: 2, 3, 5, 7, 11, 14, 17",
    options: ["11", "14", "17", "7"],
    answer: "14",
    subject: "reasoning"
  },
  {
    question: "If all the vowels are removed from the word 'COMPUTER', what will be left?",
    options: ["CMPT", "CMPTR", "CMTR", "CPTR"],
    answer: "CMPTR",
    subject: "reasoning"
  },
  {
    question: "Which number will replace the question mark? 3, 6, 18, 72, ?",
    options: ["144", "216", "288", "360"],
    answer: "288",
    subject: "reasoning"
  },
  {
    question: "If 'EARTH' is coded as 'GCTJV', how is 'MOON' coded?",
    options: ["QSSR", "QSSP", "QSRR", "QSRP"],
    answer: "QSSR",
    subject: "reasoning"
  },
  // Reasoning continued
  {
    question: "If 5x = 20, what is x?",
    options: ["2", "3", "4", "5"],
    answer: "4",
    subject: "reasoning"
  },
  {
    question: "Find the missing number: 7, 14, 28, ?, 112",
    options: ["56", "42", "84", "70"],
    answer: "56",
    subject: "reasoning"
  },
  {
    question: "Which is the odd one out? 2, 4, 8, 16, 24, 32",
    options: ["8", "16", "24", "32"],
    answer: "24",
    subject: "reasoning"
  },
  {
    question: "If CAT = 24 and DOG = 26, then BAT = ?",
    options: ["22", "23", "24", "25"],
    answer: "23",
    subject: "reasoning"
  },
  {
    question: "Which number comes next? 1, 4, 9, 16, ?",
    options: ["20", "25", "24", "36"],
    answer: "25",
    subject: "reasoning"
  },
  {
    question: "If in a certain code, 'FISH' is written as 'GJTI', how is 'BIRD' written?",
    options: ["CJSE", "CJRF", "CJRE", "CJSD"],
    answer: "CJSE",
    subject: "reasoning"
  },
  {
    question: "Which is the next in the series: J, F, M, A, M, ?",
    options: ["J", "N", "D", "S"],
    answer: "J",
    subject: "reasoning"
  },
  {
    question: "If 3 pencils cost 18 rupees, what is the cost of 7 pencils?",
    options: ["36", "42", "48", "54"],
    answer: "42",
    subject: "reasoning"
  },
  {
    question: "Which is the odd one out? Apple, Orange, Banana, Potato",
    options: ["Apple", "Banana", "Potato", "Orange"],
    answer: "Potato",
    subject: "reasoning"
  },
  {
    question: "If 2x + 3 = 11, x = ?",
    options: ["3", "4", "5", "6"],
    answer: "4",
    subject: "reasoning"
  },
  {
    question: "Find the next number: 5, 10, 20, 40, ?",
    options: ["60", "70", "80", "100"],
    answer: "80",
    subject: "reasoning"
  },
  {
    question: "If 1 = 5, 2 = 25, 3 = 125, then 4 = ?",
    options: ["625", "225", "525", "425"],
    answer: "625",
    subject: "reasoning"
  },
  {
    question: "Which is the odd one out? Lion, Tiger, Elephant, Wolf",
    options: ["Lion", "Tiger", "Elephant", "Wolf"],
    answer: "Elephant",
    subject: "reasoning"
  },
  {
    question: "If 6 + 4 = 210, 9 + 2 = 711, 8 + 5 = 313, then 5 + 2 = ?",
    options: ["37", "35", "34", "32"],
    answer: "37",
    subject: "reasoning"
  },
  {
    question: "Which is the next in the series: 2, 6, 12, 20, ?",
    options: ["24", "30", "32", "36"],
    answer: "30",
    subject: "reasoning"
  },
  {
    question: "If 4x = 32, x = ?",
    options: ["6", "7", "8", "9"],
    answer: "8",
    subject: "reasoning"
  },
  {
    question: "Which is the odd one out? Rose, Lily, Lotus, Mango",
    options: ["Rose", "Lily", "Lotus", "Mango"],
    answer: "Mango",
    subject: "reasoning"
  },
  {
    question: "If 7x = 49, x = ?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    subject: "reasoning"
  },
  {
    question: "Find the next number: 3, 6, 12, 24, ?",
    options: ["36", "48", "60", "72"],
    answer: "48",
    subject: "reasoning"
  },
  {
    question: "If 2x = 18, x = ?",
    options: ["7", "8", "9", "10"],
    answer: "9",
    subject: "reasoning"
  },
  {
    question: "Which is the odd one out? Table, Chair, Bed, Pen",
    options: ["Table", "Chair", "Bed", "Pen"],
    answer: "Pen",
    subject: "reasoning"
  },
  {
    question: "If 8x = 64, x = ?",
    options: ["6", "7", "8", "9"],
    answer: "8",
    subject: "reasoning"
  },
  {
    question: "Find the next number: 4, 8, 16, 32, ?",
    options: ["48", "56", "64", "72"],
    answer: "64",
    subject: "reasoning"
  },
  {
    question: "If 3x = 27, x = ?",
    options: ["7", "8", "9", "10"],
    answer: "9",
    subject: "reasoning"
  },
  {
    question: "Which is the odd one out? Red, Blue, Green, Apple",
    options: ["Red", "Blue", "Green", "Apple"],
    answer: "Apple",
    subject: "reasoning"
  },
  {
    question: "If 5x = 35, x = ?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    subject: "reasoning"
  },
  {
    question: "Find the next number: 6, 12, 24, 48, ?",
    options: ["60", "72", "96", "120"],
    answer: "96",
    subject: "reasoning"
  },
  {
    question: "If 9x = 81, x = ?",
    options: ["7", "8", "9", "10"],
    answer: "9",
    subject: "reasoning"
  },
  {
    question: "Which is the odd one out? Cat, Dog, Cow, Car",
    options: ["Cat", "Dog", "Cow", "Car"],
    answer: "Car",
    subject: "reasoning"
  },
  {
    question: "If 10x = 100, x = ?",
    options: ["8", "9", "10", "11"],
    answer: "10",
    subject: "reasoning"
  },
  {
    question: "Find the next number: 7, 14, 28, 56, ?",
    options: ["84", "98", "112", "126"],
    answer: "112",
    subject: "reasoning"
  },
  {
    question: "If 11x = 121, x = ?",
    options: ["9", "10", "11", "12"],
    answer: "11",
    subject: "reasoning"
  },
  {
    question: "Which is the odd one out? Sun, Moon, Star, Tree",
    options: ["Sun", "Moon", "Star", "Tree"],
    answer: "Tree",
    subject: "reasoning"
  },
  {
    question: "If 12x = 144, x = ?",
    options: ["10", "11", "12", "13"],
    answer: "12",
    subject: "reasoning"
  },
  {
    question: "Find the next number: 8, 16, 32, 64, ?",
    options: ["96", "112", "128", "144"],
    answer: "128",
    subject: "reasoning"
  },

  // History (50+)
  {
    question: "Who was the first President of the United States?",
    options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
    answer: "George Washington",
    subject: "history"
  },
  {
    question: "Who discovered America?",
    options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "James Cook"],
    answer: "Christopher Columbus",
    subject: "history"
  },
  {
    question: "Who was the first Emperor of the Maurya Dynasty?",
    options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harsha"],
    answer: "Chandragupta Maurya",
    subject: "history"
  },
  {
    question: "In which year did World War II end?",
    options: ["1942", "1945", "1948", "1950"],
    answer: "1945",
    subject: "history"
  },
  {
    question: "Who wrote the Indian National Anthem?",
    options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Mahatma Gandhi", "Subhas Chandra Bose"],
    answer: "Rabindranath Tagore",
    subject: "history"
  },
  {
    question: "Who was the founder of the Mughal Empire in India?",
    options: ["Akbar", "Babur", "Humayun", "Aurangzeb"],
    answer: "Babur",
    subject: "history"
  },
  {
    question: "Who was known as the Iron Man of India?",
    options: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "Lal Bahadur Shastri"],
    answer: "Sardar Vallabhbhai Patel",
    subject: "history"
  },
  {
    question: "Who was the first woman Prime Minister of India?",
    options: ["Indira Gandhi", "Sonia Gandhi", "Sarojini Naidu", "Pratibha Patil"],
    answer: "Indira Gandhi",
    subject: "history"
  },
  {
    question: "Who was the last Governor-General of independent India?",
    options: ["C. Rajagopalachari", "Lord Mountbatten", "Lord Wavell", "Lord Linlithgow"],
    answer: "C. Rajagopalachari",
    subject: "history"
  },
  {
    question: "Who was the first President of India?",
    options: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Zakir Hussain", "V. V. Giri"],
    answer: "Dr. Rajendra Prasad",
    subject: "history"
  },
  // History continued
  {
    question: "Who was the first woman to win a Nobel Prize?",
    options: ["Marie Curie", "Mother Teresa", "Indira Gandhi", "Florence Nightingale"],
    answer: "Marie Curie",
    subject: "history"
  },
  {
    question: "Who was the first President of India?",
    options: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Zakir Hussain", "V. V. Giri"],
    answer: "Dr. Rajendra Prasad",
    subject: "history"
  },
  {
    question: "Who was the first man to step on the moon?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
    answer: "Neil Armstrong",
    subject: "history"
  },
  {
    question: "Who was the first Prime Minister of India?",
    options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Rajendra Prasad"],
    answer: "Jawaharlal Nehru",
    subject: "history"
  },
  {
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"],
    answer: "Alexander Fleming",
    subject: "history"
  },
  {
    question: "Who was the first woman Prime Minister of the UK?",
    options: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"],
    answer: "Margaret Thatcher",
    subject: "history"
  },
  {
    question: "Who was the first President of the United States?",
    options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
    answer: "George Washington",
    subject: "history"
  },
  {
    question: "Who was the first Indian to win a Nobel Prize?",
    options: ["Rabindranath Tagore", "C. V. Raman", "Mother Teresa", "Amartya Sen"],
    answer: "Rabindranath Tagore",
    subject: "history"
  },
  {
    question: "Who was the first woman ruler of India?",
    options: ["Razia Sultana", "Indira Gandhi", "Sarojini Naidu", "Jhansi Rani"],
    answer: "Razia Sultana",
    subject: "history"
  },
  {
    question: "Who was the first Indian Governor-General of independent India?",
    options: ["C. Rajagopalachari", "Lord Mountbatten", "Lord Wavell", "Lord Linlithgow"],
    answer: "C. Rajagopalachari",
    subject: "history"
  },
  {
    question: "Who was the first Indian to climb Mount Everest?",
    options: ["Tenzing Norgay", "Bachendri Pal", "Edmund Hillary", "Santosh Yadav"],
    answer: "Tenzing Norgay",
    subject: "history"
  },
  {
    question: "Who was the first Indian to win an Olympic medal?",
    options: ["K. D. Jadhav", "Milkha Singh", "P. T. Usha", "Leander Paes"],
    answer: "K. D. Jadhav",
    subject: "history"
  },
  {
    question: "Who was the first Indian to win a gold medal in Olympics?",
    options: ["Abhinav Bindra", "Milkha Singh", "P. T. Usha", "Leander Paes"],
    answer: "Abhinav Bindra",
    subject: "history"
  },
  {
    question: "Who was the first Indian to win the Bharat Ratna?",
    options: ["C. Rajagopalachari", "S. Radhakrishnan", "C. V. Raman", "Jawaharlal Nehru"],
    answer: "C. Rajagopalachari",
    subject: "history"
  },
  {
    question: "Who was the first Indian to win the Nobel Prize in Physics?",
    options: ["C. V. Raman", "Homi Bhabha", "S. Chandrasekhar", "Venkatraman Ramakrishnan"],
    answer: "C. V. Raman",
    subject: "history"
  },
  {
    question: "Who was the first Indian to win the Nobel Prize in Literature?",
    options: ["Rabindranath Tagore", "V. S. Naipaul", "Salman Rushdie", "Arundhati Roy"],
    answer: "Rabindranath Tagore",
    subject: "history"
  },
  {
    question: "Who was the first Indian to win the Nobel Prize in Peace?",
    options: ["Mother Teresa", "Kailash Satyarthi", "Amartya Sen", "C. V. Raman"],
    answer: "Mother Teresa",
    subject: "history"
  },
  {
    question: "Who was the first Indian to win the Nobel Prize in Economics?",
    options: ["Amartya Sen", "Abhijit Banerjee", "Raghuram Rajan", "Manmohan Singh"],
    answer: "Amartya Sen",
    subject: "history"
  },
  {
    question: "Who was the first Indian to win the Nobel Prize in Chemistry?",
    options: ["Venkatraman Ramakrishnan", "C. V. Raman", "Homi Bhabha", "S. Chandrasekhar"],
    answer: "Venkatraman Ramakrishnan",
    subject: "history"
  },
  {
    question: "Who was the first Indian to win the Nobel Prize in Medicine?",
    options: ["Har Gobind Khorana", "C. V. Raman", "Homi Bhabha", "S. Chandrasekhar"],
    answer: "Har Gobind Khorana",
    subject: "history"
  },
  {
    question: "Who was the first Indian to win the Nobel Prize in Peace?",
    options: ["Mother Teresa", "Kailash Satyarthi", "Amartya Sen", "C. V. Raman"],
    answer: "Mother Teresa",
    subject: "history"
  },
  {
    question: "Who was the first Indian to win the Nobel Prize in Literature?",
    options: ["Rabindranath Tagore", "V. S. Naipaul", "Salman Rushdie", "Arundhati Roy"],
    answer: "Rabindranath Tagore",
    subject: "history"
  },
  {
    question: "Who was the first Indian to win the Nobel Prize in Physics?",
    options: ["C. V. Raman", "Homi Bhabha", "S. Chandrasekhar", "Venkatraman Ramakrishnan"],
    answer: "C. V. Raman",
    subject: "history"
  },
  {
    question: "Who was the first Indian to win the Nobel Prize in Chemistry?",
    options: ["Venkatraman Ramakrishnan", "C. V. Raman", "Homi Bhabha", "S. Chandrasekhar"],
    answer: "Venkatraman Ramakrishnan",
    subject: "history"
  },
  {
    question: "Who was the first Indian to win the Nobel Prize in Medicine?",
    options: ["Har Gobind Khorana", "C. V. Raman", "Homi Bhabha", "S. Chandrasekhar"],
    answer: "Har Gobind Khorana",
    subject: "history"
  },

  // Current Affairs (50+)
  {
    question: "Who is the current Secretary-General of the United Nations (2025)?",
    options: ["Ban Ki-moon", "António Guterres", "Kofi Annan", "Boutros Boutros-Ghali"],
    answer: "António Guterres",
    subject: "current_affairs"
  },
  {
    question: "Which country hosted the 2024 Summer Olympics?",
    options: ["France", "Japan", "USA", "Brazil"],
    answer: "France",
    subject: "current_affairs"
  },
  {
    question: "Who is the current President of the United States (2025)?",
    options: ["Joe Biden", "Donald Trump", "Kamala Harris", "Barack Obama"],
    answer: "Joe Biden",
    subject: "current_affairs"
  },
  {
    question: "Which country won the 2023 Cricket World Cup?",
    options: ["India", "Australia", "England", "New Zealand"],
    answer: "India",
    subject: "current_affairs"
  },
  {
    question: "Which Indian city was declared a UNESCO World Heritage site in 2023?",
    options: ["Varanasi", "Jaipur", "Ahmedabad", "Hyderabad"],
    answer: "Varanasi",
    subject: "current_affairs"
  },
  {
    question: "Who is the current Prime Minister of the UK (2025)?",
    options: ["Rishi Sunak", "Boris Johnson", "Keir Starmer", "Theresa May"],
    answer: "Rishi Sunak",
    subject: "current_affairs"
  },
  {
    question: "Which country launched the Artemis II mission to the Moon?",
    options: ["Russia", "USA", "China", "India"],
    answer: "USA",
    subject: "current_affairs"
  },
  {
    question: "Which Indian state won the most medals in the 2023 National Games?",
    options: ["Maharashtra", "Haryana", "Punjab", "Kerala"],
    answer: "Maharashtra",
    subject: "current_affairs"
  },
  {
    question: "Who is the current Chief Minister of Uttar Pradesh (2025)?",
    options: ["Yogi Adityanath", "Akhilesh Yadav", "Mayawati", "Keshav Prasad Maurya"],
    answer: "Yogi Adityanath",
    subject: "current_affairs"
  },
  {
    question: "Which country won the FIFA Women's World Cup 2023?",
    options: ["USA", "Spain", "Germany", "Brazil"],
    answer: "Spain",
    subject: "current_affairs"
  },
  // Current Affairs continued
  {
    question: "Who won the 2024 Indian General Election?",
    options: ["BJP", "Congress", "AAP", "TMC"],
    answer: "BJP",
    subject: "current_affairs"
  },
  {
    question: "Which country won the 2024 UEFA Euro Cup?",
    options: ["Germany", "France", "Italy", "England"],
    answer: "France",
    subject: "current_affairs"
  },
  {
    question: "Who is the current Chief Minister of Maharashtra (2025)?",
    options: ["Eknath Shinde", "Uddhav Thackeray", "Devendra Fadnavis", "Ajit Pawar"],
    answer: "Eknath Shinde",
    subject: "current_affairs"
  },
  {
    question: "Which country hosted the 2025 G20 Summit?",
    options: ["Brazil", "India", "USA", "China"],
    answer: "Brazil",
    subject: "current_affairs"
  },
  {
    question: "Who won the 2024 Nobel Peace Prize?",
    options: ["UNICEF", "World Food Programme", "Malala Yousafzai", "Greta Thunberg"],
    answer: "World Food Programme",
    subject: "current_affairs"
  },
  {
    question: "Which Indian city hosted the 2024 International Film Festival of India?",
    options: ["Goa", "Mumbai", "Delhi", "Kolkata"],
    answer: "Goa",
    subject: "current_affairs"
  },
  {
    question: "Who is the current President of France (2025)?",
    options: ["Emmanuel Macron", "Marine Le Pen", "Nicolas Sarkozy", "Francois Hollande"],
    answer: "Emmanuel Macron",
    subject: "current_affairs"
  },
  {
    question: "Which country won the 2024 ICC T20 World Cup?",
    options: ["India", "Australia", "England", "Pakistan"],
    answer: "India",
    subject: "current_affairs"
  },
  {
    question: "Who is the current Chief Minister of West Bengal (2025)?",
    options: ["Mamata Banerjee", "Suvendu Adhikari", "Abhishek Banerjee", "Dilip Ghosh"],
    answer: "Mamata Banerjee",
    subject: "current_affairs"
  },
  {
    question: "Which country won the 2024 Olympic Men's Football Gold?",
    options: ["Brazil", "France", "Argentina", "Germany"],
    answer: "Argentina",
    subject: "current_affairs"
  },
  {
    question: "Who is the current President of Russia (2025)?",
    options: ["Vladimir Putin", "Dmitry Medvedev", "Alexei Navalny", "Sergei Shoigu"],
    answer: "Vladimir Putin",
    subject: "current_affairs"
  },
  {
    question: "Which country won the 2024 Thomas Cup (Badminton)?",
    options: ["India", "China", "Indonesia", "Japan"],
    answer: "China",
    subject: "current_affairs"
  },
  {
    question: "Who is the current Chief Minister of Tamil Nadu (2025)?",
    options: ["M. K. Stalin", "Edappadi K. Palaniswami", "O. Panneerselvam", "Anbumani Ramadoss"],
    answer: "M. K. Stalin",
    subject: "current_affairs"
  },
  {
    question: "Which country won the 2024 Copa America?",
    options: ["Argentina", "Brazil", "Uruguay", "Chile"],
    answer: "Argentina",
    subject: "current_affairs"
  },
  {
    question: "Who is the current President of China (2025)?",
    options: ["Xi Jinping", "Li Keqiang", "Hu Jintao", "Wen Jiabao"],
    answer: "Xi Jinping",
    subject: "current_affairs"
  },
  {
    question: "Which country won the 2024 Hockey World Cup?",
    options: ["Netherlands", "India", "Australia", "Germany"],
    answer: "Netherlands",
    subject: "current_affairs"
  },
  {
    question: "Who is the current Chief Minister of Kerala (2025)?",
    options: ["Pinarayi Vijayan", "Oommen Chandy", "Ramesh Chennithala", "K. Surendran"],
    answer: "Pinarayi Vijayan",
    subject: "current_affairs"
  },
  {
    question: "Which country won the 2024 ICC Women's T20 World Cup?",
    options: ["Australia", "India", "England", "South Africa"],
    answer: "Australia",
    subject: "current_affairs"
  },
  {
    question: "Who is the current President of the USA (2025)?",
    options: ["Joe Biden", "Donald Trump", "Kamala Harris", "Barack Obama"],
    answer: "Joe Biden",
    subject: "current_affairs"
  },
  {
    question: "Which country won the 2024 FIFA U-20 World Cup?",
    options: ["Uruguay", "Italy", "Brazil", "France"],
    answer: "Uruguay",
    subject: "current_affairs"
  },
];

// Fisher-Yates shuffle algorithm for better randomization
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to load questions by subject and count
export async function loadQuestions(subject, count) {
  let filtered;
  if (subject === "misc") {
    // Exclude questions with subject 'misc' if any, and shuffle all others
    filtered = db.filter(q => q.subject !== 'misc');
  } else {
    filtered = db.filter(q => q.subject === subject);
  }
  // Use Fisher-Yates shuffle for better randomization
  filtered = shuffleArray([...filtered]); // Create a copy before shuffling
  return filtered.slice(0, count);
}

async function initQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result").innerText = "";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("feedback")?.remove();
  try {
    questions = await loadQuestions(selectedSubject, numQuestions);
    if (questions.length < numQuestions) {
      alert(`Only ${questions.length} questions available for this subject.`);
    }
    showQuestion();
  } catch (error) {
    console.error("Error loading questions:", error);
    document.getElementById("question").innerText = "Failed to load questions.";
  }
}