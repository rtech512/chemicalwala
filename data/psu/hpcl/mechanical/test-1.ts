export type HpclQuestion = {
  id: number;
  section: "English" | "Quantitative Aptitude" | "Intellectual Potential" | "Mechanical";
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export const hpclMechanicalTest1: HpclQuestion[] = [
  // ================= ENGLISH: 17 QUESTIONS =================
  {
    id: 1,
    section: "English",
    question: "Choose the word which is most nearly similar in meaning to: ABUNDANT",
    options: ["Scarce", "Plentiful", "Weak", "Limited"],
    correctAnswer: "Plentiful",
    explanation: "Abundant means available in large quantity; plentiful is the closest synonym.",
  },
  {
    id: 2,
    section: "English",
    question: "Choose the word opposite in meaning to: RELUCTANT",
    options: ["Unwilling", "Hesitant", "Eager", "Slow"],
    correctAnswer: "Eager",
    explanation: "Reluctant means unwilling or hesitant. Its opposite is eager.",
  },
  {
    id: 3,
    section: "English",
    question: "Select the correctly spelt word.",
    options: ["Accomodate", "Acommodate", "Accommodate", "Acomodate"],
    correctAnswer: "Accommodate",
    explanation: "The correct spelling is Accommodate.",
  },
  {
    id: 4,
    section: "English",
    question: "Fill in the blank: The manager insisted ______ punctuality.",
    options: ["for", "on", "at", "with"],
    correctAnswer: "on",
    explanation: "The correct phrase is 'insisted on'.",
  },
  {
    id: 5,
    section: "English",
    question: "Choose the correct sentence.",
    options: [
      "He do not like tea.",
      "He does not likes tea.",
      "He does not like tea.",
      "He did not likes tea.",
    ],
    correctAnswer: "He does not like tea.",
    explanation: "With does, the base form of verb 'like' is used.",
  },
  {
    id: 6,
    section: "English",
    question: "One word substitution: A person who speaks many languages.",
    options: ["Linguist", "Polyglot", "Translator", "Orator"],
    correctAnswer: "Polyglot",
    explanation: "A polyglot is a person who knows and uses several languages.",
  },
  {
    id: 7,
    section: "English",
    question: "Choose the correct passive voice: They completed the work.",
    options: [
      "The work completed by them.",
      "The work was completed by them.",
      "The work is completed by them.",
      "The work has completed by them.",
    ],
    correctAnswer: "The work was completed by them.",
    explanation: "Simple past active changes to 'was/were + V3' in passive voice.",
  },
  {
    id: 8,
    section: "English",
    question: "Choose the correct indirect speech: He said, 'I am busy.'",
    options: [
      "He said that he is busy.",
      "He said that I was busy.",
      "He said that he was busy.",
      "He says that he was busy.",
    ],
    correctAnswer: "He said that he was busy.",
    explanation: "In indirect speech, 'am' changes to 'was' when reporting verb is in past.",
  },
  {
    id: 9,
    section: "English",
    question: "Find the error: Each of the students have submitted the assignment.",
    options: ["Each of", "the students", "have submitted", "the assignment"],
    correctAnswer: "have submitted",
    explanation: "'Each of' takes singular verb, so 'has submitted' is correct.",
  },
  {
    id: 10,
    section: "English",
    question: "Choose the meaning of the idiom: To hit the nail on the head.",
    options: [
      "To do physical work",
      "To say exactly the right thing",
      "To hurt someone",
      "To miss the point",
    ],
    correctAnswer: "To say exactly the right thing",
    explanation: "The idiom means to describe or identify something exactly.",
  },
  {
    id: 11,
    section: "English",
    question: "Fill in the blank: Neither Ram nor his friends ______ present.",
    options: ["was", "were", "is", "has"],
    correctAnswer: "were",
    explanation: "With neither/nor, the verb agrees with the nearer subject 'friends'.",
  },
  {
    id: 12,
    section: "English",
    question: "Choose the correct article: He is ______ honest officer.",
    options: ["a", "an", "the", "no article"],
    correctAnswer: "an",
    explanation: "'Honest' starts with a vowel sound, so 'an' is used.",
  },
  {
    id: 13,
    section: "English",
    question: "Choose the correct synonym of: EFFICIENT",
    options: ["Capable", "Careless", "Lazy", "Weak"],
    correctAnswer: "Capable",
    explanation: "Efficient means working well and effectively; capable is closest.",
  },
  {
    id: 14,
    section: "English",
    question: "Choose the correct antonym of: EXPAND",
    options: ["Increase", "Extend", "Contract", "Enlarge"],
    correctAnswer: "Contract",
    explanation: "Expand means to increase in size; contract means to reduce.",
  },
  {
    id: 15,
    section: "English",
    question: "Fill in the blank: The train arrived ______ time.",
    options: ["in", "on", "at", "by"],
    correctAnswer: "on",
    explanation: "'On time' means punctual.",
  },
  {
    id: 16,
    section: "English",
    question: "Choose the correctly punctuated sentence.",
    options: [
      "Ravi said I am ready.",
      "Ravi said, 'I am ready.'",
      "Ravi said 'I am ready'.",
      "Ravi, said I am ready.",
    ],
    correctAnswer: "Ravi said, 'I am ready.'",
    explanation: "Direct speech requires comma and quotation marks.",
  },
  {
    id: 17,
    section: "English",
    question: "Choose the correct form: If I were you, I ______ accept the offer.",
    options: ["will", "would", "shall", "can"],
    correctAnswer: "would",
    explanation: "In hypothetical condition, 'would' is used.",
  },
  // ========== QUANTITATIVE APTITUDE: Q18-Q27 ==========

  {
    id: 18,
    section: "Quantitative Aptitude",
    question:
      "A number is increased by 20% and then decreased by 20%. What is the net percentage change?",
    options: ["No change", "4% decrease", "4% increase", "2% decrease"],
    correctAnswer: "4% decrease",
    explanation:
      "Let the number be 100. After 20% increase it becomes 120. After 20% decrease, it becomes 96. Hence net decrease = 4%.",
  },
  {
    id: 19,
    section: "Quantitative Aptitude",
    question:
      "The ratio of the present ages of A and B is 4:5. After 8 years, the ratio becomes 6:7. What is the present age of B?",
    options: ["16 years", "20 years", "24 years", "28 years"],
    correctAnswer: "20 years",
    explanation:
      "Let present ages be 4x and 5x. Then (4x + 8)/(5x + 8) = 6/7. Solving gives x = 4. Therefore B's age = 5 × 4 = 20 years.",
  },
  {
    id: 20,
    section: "Quantitative Aptitude",
    question:
      "A shopkeeper marks an article 25% above its cost price and allows a discount of 10% on the marked price. What is his profit percentage?",
    options: ["10%", "12.5%", "15%", "17.5%"],
    correctAnswer: "12.5%",
    explanation:
      "Let CP = 100. Marked price = 125. Selling price after 10% discount = 112.5. Profit = 12.5%.",
  },
  {
    id: 21,
    section: "Quantitative Aptitude",
    question:
      "A can complete a work in 12 days and B can complete the same work in 18 days. In how many days can they complete it together?",
    options: ["6 days", "7.2 days", "7.5 days", "8 days"],
    correctAnswer: "7.2 days",
    explanation:
      "Combined work rate = 1/12 + 1/18 = 5/36. Time = 36/5 = 7.2 days.",
  },
  {
    id: 22,
    section: "Quantitative Aptitude",
    question:
      "A train 180 m long crosses a pole in 12 seconds. What is the speed of the train?",
    options: ["45 km/h", "54 km/h", "60 km/h", "72 km/h"],
    correctAnswer: "54 km/h",
    explanation:
      "Speed = 180/12 = 15 m/s. Converting into km/h: 15 × 18/5 = 54 km/h.",
  },
  {
    id: 23,
    section: "Quantitative Aptitude",
    question:
      "The simple interest on a sum of money at 8% per annum for 3 years is ₹1,920. What is the principal?",
    options: ["₹6,000", "₹7,500", "₹8,000", "₹9,000"],
    correctAnswer: "₹8,000",
    explanation:
      "SI = PRT/100. Therefore 1920 = P × 8 × 3 / 100, giving P = ₹8,000.",
  },
  {
    id: 24,
    section: "Quantitative Aptitude",
    question:
      "The average of 8 numbers is 24. If one number 18 is replaced by 30, what will be the new average?",
    options: ["24.5", "25", "25.5", "26"],
    correctAnswer: "25.5",
    explanation:
      "Original total = 8 × 24 = 192. New total = 192 - 18 + 30 = 204. New average = 204/8 = 25.5.",
  },
  {
    id: 25,
    section: "Quantitative Aptitude",
    question:
      "In a mixture of milk and water, the ratio is 5:3. If 16 litres of water is added, the ratio becomes 5:7. What was the original quantity of the mixture?",
    options: ["24 litres", "32 litres", "40 litres", "48 litres"],
    correctAnswer: "32 litres",
    explanation:
      "Let milk and water be 5x and 3x. Then 5x/(3x + 16) = 5/7. Thus 7x = 3x + 16, so x = 4. Original mixture = 8x = 32 litres.",
  },
  {
    id: 26,
    section: "Quantitative Aptitude",
    question:
      "A sum amounts to ₹12,100 in 2 years at 10% per annum compound interest, compounded annually. What is the principal?",
    options: ["₹9,000", "₹10,000", "₹10,500", "₹11,000"],
    correctAnswer: "₹10,000",
    explanation:
      "A = P(1.1)^2 = 1.21P. Therefore P = 12100/1.21 = ₹10,000.",
  },
  {
    id: 27,
    section: "Quantitative Aptitude",
    question:
      "A boat travels 30 km downstream in 2 hours and the same distance upstream in 3 hours. What is the speed of the boat in still water?",
    options: ["10 km/h", "11.5 km/h", "12.5 km/h", "15 km/h"],
    correctAnswer: "12.5 km/h",
    explanation:
      "Downstream speed = 30/2 = 15 km/h and upstream speed = 30/3 = 10 km/h. Speed in still water = (15 + 10)/2 = 12.5 km/h.",
  },
  // ========== QUANTITATIVE APTITUDE: Q28-Q37 ==========

  {
    id: 28,
    section: "Quantitative Aptitude",
    question:
      "The salaries of A and B are in the ratio 3:5. If the salary of A is increased by 20% and that of B by 10%, what will be the new ratio of their salaries?",
    options: ["18:25", "36:55", "6:11", "4:5"],
    correctAnswer: "36:55",
    explanation:
      "Let salaries be 3x and 5x. New salaries are 3.6x and 5.5x. Therefore ratio = 3.6:5.5 = 36:55.",
  },
  {
    id: 29,
    section: "Quantitative Aptitude",
    question:
      "A person travels one-third of a distance at 30 km/h, one-third at 45 km/h and the remaining one-third at 60 km/h. What is the average speed for the entire journey?",
    options: ["40 km/h", "41.54 km/h", "45 km/h", "46.15 km/h"],
    correctAnswer: "41.54 km/h",
    explanation:
      "For equal distances, average speed = 3 / (1/30 + 1/45 + 1/60) = 540/13 ≈ 41.54 km/h.",
  },
  {
    id: 30,
    section: "Quantitative Aptitude",
    question:
      "Two numbers are in the ratio 5:7 and their LCM is 420. What is their HCF?",
    options: ["10", "12", "15", "20"],
    correctAnswer: "12",
    explanation:
      "Let the numbers be 5x and 7x. Since 5 and 7 are coprime, LCM = 35x = 420. Thus x = 12, which is their HCF.",
  },
  {
    id: 31,
    section: "Quantitative Aptitude",
    question:
      "A man spends 75% of his income. If his income increases by 20% and his expenditure increases by 10%, by what percentage do his savings increase?",
    options: ["40%", "45%", "50%", "60%"],
    correctAnswer: "50%",
    explanation:
      "Let income = 100 and expenditure = 75, so savings = 25. New income = 120 and new expenditure = 82.5. New savings = 37.5. Increase = 12.5 on 25 = 50%.",
  },
  {
    id: 32,
    section: "Quantitative Aptitude",
    question:
      "A pipe can fill a tank in 15 hours and another pipe can empty it in 20 hours. If both pipes are opened together, in how many hours will the empty tank be filled?",
    options: ["40 hours", "50 hours", "60 hours", "75 hours"],
    correctAnswer: "60 hours",
    explanation:
      "Net filling rate = 1/15 - 1/20 = 1/60. Therefore the tank will be filled in 60 hours.",
  },
  {
    id: 33,
    section: "Quantitative Aptitude",
    question:
      "A trader sells two articles for ₹9,900 each. On one he gains 10% and on the other he loses 10%. What is his overall result?",
    options: ["No profit no loss", "1% profit", "1% loss", "2% loss"],
    correctAnswer: "1% loss",
    explanation:
      "For equal selling prices with equal gain and loss percentages x%, overall loss = x²/100 = 10²/100 = 1%.",
  },
  {
    id: 34,
    section: "Quantitative Aptitude",
    question:
      "The difference between compound interest and simple interest on a sum for 2 years at 10% per annum is ₹120. What is the principal?",
    options: ["₹10,000", "₹12,000", "₹15,000", "₹20,000"],
    correctAnswer: "₹12,000",
    explanation:
      "For 2 years, CI - SI = P(R/100)². Thus 120 = P(0.1)² = 0.01P, giving P = ₹12,000.",
  },
  {
    id: 35,
    section: "Quantitative Aptitude",
    question:
      "A train running at 72 km/h crosses a platform 280 m long in 25 seconds. What is the length of the train?",
    options: ["180 m", "200 m", "220 m", "250 m"],
    correctAnswer: "220 m",
    explanation:
      "Speed = 72 × 5/18 = 20 m/s. Total distance in 25 s = 500 m. Train length = 500 - 280 = 220 m.",
  },
  {
    id: 36,
    section: "Quantitative Aptitude",
    question:
      "The average marks of 30 students is 64. If the marks of the teacher are included, the average becomes 65. What are the teacher's marks?",
    options: ["90", "92", "95", "100"],
    correctAnswer: "95",
    explanation:
      "Total marks of 30 students = 30 × 64 = 1920. Total including teacher = 31 × 65 = 2015. Teacher's marks = 2015 - 1920 = 95.",
  },
 
   {
    id: 37,
    section: "Quantitative Aptitude",
    question:
      "A and B invest ₹40,000 and ₹50,000 respectively in a business. After 6 months, A withdraws half of his capital. If the total annual profit is ₹32,000, what is B's share?",
    options: ["₹18,000", "₹20,000", "₹22,000", "₹25,000"],
    correctAnswer: "₹20,000",
    explanation:
      "A's capital-time = 40000×6 + 20000×6 = 360000. B's capital-time = 50000×12 = 600000. Ratio = 3:5. Therefore B's share = 32000×5/8 = ₹20,000.",
  },
  {
    id: 38,
    section: "Quantitative Aptitude",
    question:
      "If 15 men can complete a work in 24 days, how many men are required to complete the same work in 18 days?",
    options: ["18", "20", "22", "24"],
    correctAnswer: "20",
    explanation:
      "Men and days are inversely proportional. Required men = 15×24/18 = 20.",
  },
  {
    id: 39,
    section: "Quantitative Aptitude",
    question:
      "A sum of ₹8,000 is divided between A and B in the ratio 3:5. What is B's share?",
    options: ["₹3,000", "₹4,000", "₹5,000", "₹6,000"],
    correctAnswer: "₹5,000",
    explanation:
      "B's share = 8000×5/(3+5) = ₹5,000.",
  },
  {
    id: 40,
    section: "Quantitative Aptitude",
    question:
      "The price of an article is reduced by 20%. By what percentage must the reduced price be increased to restore the original price?",
    options: ["20%", "22.5%", "25%", "30%"],
    correctAnswer: "25%",
    explanation:
      "Let original price = 100. Reduced price = 80. Required increase = 20/80×100 = 25%.",
  },
  {
    id: 41,
    section: "Quantitative Aptitude",
    question:
      "A car covers the first 120 km at 40 km/h and the next 180 km at 60 km/h. What is the average speed for the entire journey?",
    options: ["45 km/h", "48 km/h", "50 km/h", "52 km/h"],
    correctAnswer: "50 km/h",
    explanation:
      "Total distance = 300 km. Total time = 120/40 + 180/60 = 3 + 3 = 6 hours. Average speed = 300/6 = 50 km/h.",
  },
  {
    id: 42,
    section: "Quantitative Aptitude",
    question:
      "If x + 1/x = 5, what is the value of x² + 1/x²?",
    options: ["21", "23", "25", "27"],
    correctAnswer: "23",
    explanation:
      "Squaring: x² + 1/x² + 2 = 25. Therefore x² + 1/x² = 23.",
  },
  {
    id: 43,
    section: "Quantitative Aptitude",
    question:
      "A rectangular field has length 25% more than its breadth. If its perimeter is 180 m, what is its area?",
    options: ["1600 m²", "1800 m²", "2000 m²", "2200 m²"],
    correctAnswer: "2000 m²",
    explanation:
      "Let breadth = 4x and length = 5x. Perimeter = 18x = 180, so x = 10. Dimensions = 40 m and 50 m. Area = 2000 m².",
  },
  {
    id: 44,
    section: "Quantitative Aptitude",
    question:
      "What is the smallest number which when divided by 12, 18 and 24 leaves remainder 5 in each case?",
    options: ["67", "72", "77", "149"],
    correctAnswer: "77",
    explanation:
      "LCM of 12, 18 and 24 is 72. Required number = 72 + 5 = 77.",
  },
  {
    id: 45,
    section: "Quantitative Aptitude",
    question:
      "A bag contains 5 red, 4 blue and 3 green balls. One ball is drawn at random. What is the probability that it is not green?",
    options: ["1/4", "1/3", "2/3", "3/4"],
    correctAnswer: "3/4",
    explanation:
      "Total balls = 12. Non-green balls = 9. Probability = 9/12 = 3/4.",
  },
  {
    id: 46,
    section: "Quantitative Aptitude",
    question:
      "The present population of a town is 50,000. If it increases by 10% in the first year and decreases by 10% in the second year, what will be the population after two years?",
    options: ["49,000", "49,500", "50,000", "50,500"],
    correctAnswer: "49,500",
    explanation:
      "Population after first year = 50000×1.10 = 55000. After second year = 55000×0.90 = 49,500.",
  },
  {
    id: 47,
    section: "Quantitative Aptitude",
    question:
      "A father is three times as old as his son. After 12 years, he will be twice as old as his son. What is the present age of the son?",
    options: ["10 years", "12 years", "14 years", "16 years"],
    correctAnswer: "12 years",
    explanation:
      "Let son's age = x and father's age = 3x. After 12 years: 3x+12 = 2(x+12). Thus x = 12 years.",
  },
  // ========== QUANTITATIVE APTITUDE: Q48-Q51 ==========

  {
    id: 48,
    section: "Quantitative Aptitude",
    question:
      "The ratio of two numbers is 7:9. If 12 is added to each number, the ratio becomes 4:5. What is the smaller number?",
    options: ["72", "84", "96", "108"],
    correctAnswer: "84",
    explanation:
      "Let the numbers be 7x and 9x. Then (7x + 12)/(9x + 12) = 4/5. Solving: 35x + 60 = 36x + 48, so x = 12. Smaller number = 7×12 = 84.",
  },
  {
    id: 49,
    section: "Quantitative Aptitude",
    question:
      "A contractor planned to complete a work in 40 days with 30 workers. After 20 days, only 40% of the work was completed. How many additional workers of equal efficiency are required to finish the remaining work on time?",
    options: ["10", "12", "15", "18"],
    correctAnswer: "15",
    explanation:
      "30 workers complete 40% work in 20 days. To complete 60% work in the next 20 days, required workers = 30×60/40 = 45. Additional workers = 45−30 = 15.",
  },
  {
    id: 50,
    section: "Quantitative Aptitude",
    question:
      "A vessel contains 60 litres of milk. 12 litres are removed and replaced with water. This operation is repeated once more. How much milk remains in the vessel?",
    options: ["36.0 litres", "38.4 litres", "40.0 litres", "42.5 litres"],
    correctAnswer: "38.4 litres",
    explanation:
      "Milk remaining after two replacements = 60×(1−12/60)² = 60×(4/5)² = 38.4 litres.",
  },
  {
    id: 51,
    section: "Quantitative Aptitude",
    question:
      "A can complete a work in 20 days and B in 30 days. They work together for 6 days, after which A leaves. In how many more days will B complete the remaining work?",
    options: ["12 days", "15 days", "18 days", "21 days"],
    correctAnswer: "15 days",
    explanation:
      "Together, daily work = 1/20 + 1/30 = 1/12. In 6 days they complete 1/2 of the work. Remaining work = 1/2. B alone takes (1/2)×30 = 15 days.",
  },
  // ========== INTELLECTUAL POTENTIAL / REASONING: Q52-Q61 ==========

  {
    id: 52,
    section: "Intellectual Potential",
    question:
      "Find the next number in the series: 3, 8, 18, 38, 78, ?",
    options: ["148", "156", "158", "160"],
    correctAnswer: "158",
    explanation:
      "Pattern is ×2 + 2. Thus 78 × 2 + 2 = 158.",
  },
  {
    id: 53,
    section: "Intellectual Potential",
    question:
      "Find the missing term: AZ, BY, CX, DW, ?",
    options: ["EV", "EU", "FV", "EW"],
    correctAnswer: "EV",
    explanation:
      "The first letters move forward A, B, C, D, E while the second letters move backward Z, Y, X, W, V.",
  },
  {
    id: 54,
    section: "Intellectual Potential",
    question:
      "In a certain code language, MACHINE is written as NBDIJOF. How will ENGINE be written in the same code?",
    options: ["FOHJOF", "FOHJNF", "FNHJOF", "EOHJOF"],
    correctAnswer: "FOHJOF",
    explanation:
      "Each letter is replaced by the next letter of the alphabet: E→F, N→O, G→H, I→J, N→O, E→F.",
  },
  {
    id: 55,
    section: "Intellectual Potential",
    question:
      "Pointing to a woman, Ravi said, 'She is the daughter of the only son of my grandfather.' How is the woman related to Ravi?",
    options: ["Sister", "Daughter", "Cousin", "Aunt"],
    correctAnswer: "Sister",
    explanation:
      "The only son of Ravi's grandfather is Ravi's father. The daughter of Ravi's father is Ravi's sister.",
  },
  {
    id: 56,
    section: "Intellectual Potential",
    question:
      "A person walks 10 m north, turns right and walks 15 m, then turns right and walks 10 m. How far and in which direction is he from the starting point?",
    options: ["10 m East", "15 m East", "15 m West", "20 m East"],
    correctAnswer: "15 m East",
    explanation:
      "The 10 m north and 10 m south movements cancel. The person remains 15 m east of the starting point.",
  },
  {
    id: 57,
    section: "Intellectual Potential",
    question:
      "Statements: All turbines are machines. Some machines are generators. Conclusions: I. Some turbines are generators. II. All turbines are machines. Which conclusion follows?",
    options: [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    correctAnswer: "Only II follows",
    explanation:
      "Conclusion II directly follows from the first statement. No definite relation between turbines and generators is established.",
  },
  {
    id: 58,
    section: "Intellectual Potential",
    question:
      "Five persons P, Q, R, S and T are sitting in a row facing north. Q is immediately to the right of P. R is immediately to the left of S. T is at the extreme right. If S is immediately to the left of T, who sits in the middle?",
    options: ["P", "Q", "R", "S"],
    correctAnswer: "R",
    explanation:
      "The arrangement is P-Q-R-S-T. Therefore R occupies the middle position.",
  },
  {
    id: 59,
    section: "Intellectual Potential",
    question:
      "If 1 January of a non-leap year is Monday, what day of the week will 1 March be?",
    options: ["Wednesday", "Thursday", "Friday", "Saturday"],
    correctAnswer: "Thursday",
    explanation:
      "January has 31 days, giving a shift of 3 days. So 1 February is Thursday. February has 28 days, giving no further shift. Hence 1 March is Thursday.",
  },
  {
    id: 60,
    section: "Intellectual Potential",
    question:
      "In a class of 45 students, Aman ranks 12th from the top. What is his rank from the bottom?",
    options: ["32nd", "33rd", "34th", "35th"],
    correctAnswer: "34th",
    explanation:
      "Rank from bottom = Total students − rank from top + 1 = 45 − 12 + 1 = 34.",
  },
  {
    id: 61,
    section: "Intellectual Potential",
    question:
      "Find the odd one out.",
    options: ["64", "125", "216", "324"],
    correctAnswer: "324",
    explanation:
      "64 = 4³, 125 = 5³ and 216 = 6³, whereas 324 is not a perfect cube.",
  },
  // ========== INTELLECTUAL POTENTIAL / REASONING: Q62-Q71 ==========

  {
    id: 62,
    section: "Intellectual Potential",
    question:
      "Find the next term in the series: 7, 10, 16, 28, 52, ?",
    options: ["88", "96", "100", "104"],
    correctAnswer: "100",
    explanation:
      "Successive differences are 3, 6, 12, 24, which double each time. Next difference = 48. Therefore 52 + 48 = 100.",
  },
  {
    id: 63,
    section: "Intellectual Potential",
    question:
      "If ROAD is coded as URDG, how will SWAN be coded using the same pattern?",
    options: ["VZDQ", "VYDQ", "UZDP", "VZCQ"],
    correctAnswer: "VZDQ",
    explanation:
      "Each letter is shifted three places forward: S→V, W→Z, A→D, N→Q.",
  },
  {
    id: 64,
    section: "Intellectual Potential",
    question:
      "A is the brother of B. C is the mother of A. D is the father of C. How is D related to B?",
    options: [
      "Paternal grandfather",
      "Maternal grandfather",
      "Maternal uncle",
      "Father",
    ],
    correctAnswer: "Maternal grandfather",
    explanation:
      "C is the mother of A and B. D is C's father. Therefore D is B's maternal grandfather.",
  },
  {
    id: 65,
    section: "Intellectual Potential",
    question:
      "A man starts facing west. He turns 90° clockwise, then 180° anticlockwise, and finally 90° clockwise. In which direction is he facing now?",
    options: ["North", "South", "East", "West"],
    correctAnswer: "West",
    explanation:
      "West → 90° clockwise = North → 180° anticlockwise = South → 90° clockwise = West.",
  },
  {
    id: 66,
    section: "Intellectual Potential",
    question:
      "Statements: Some engineers are managers. All managers are graduates. Conclusions: I. Some engineers are graduates. II. All graduates are managers. Which conclusion follows?",
    options: [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    correctAnswer: "Only I follows",
    explanation:
      "Some engineers are managers and all managers are graduates, so those engineers are graduates. The reverse relation in conclusion II does not follow.",
  },
  {
    id: 67,
    section: "Intellectual Potential",
    question:
      "Six persons A, B, C, D, E and F are sitting in a row facing north. A is immediately left of B. B is immediately left of C. F is at the extreme right. E is immediately left of F. D is immediately left of E. Who is third from the left?",
    options: ["B", "C", "D", "E"],
    correctAnswer: "C",
    explanation:
      "The arrangement is A-B-C-D-E-F. Therefore C is third from the left.",
  },
  {
    id: 68,
    section: "Intellectual Potential",
    question:
      "If the letters of the word MECHANICAL are arranged alphabetically, which letter will be fifth from the left?",
    options: ["E", "H", "I", "L"],
    correctAnswer: "E",
    explanation:
      "Alphabetical order is A, A, C, C, E, H, I, L, M, N. Therefore the fifth letter is E.",
  },
  {
    id: 69,
    section: "Intellectual Potential",
    question:
      "In a queue, P is 18th from the front and 25th from the rear. How many persons are there in the queue?",
    options: ["41", "42", "43", "44"],
    correctAnswer: "42",
    explanation:
      "Total persons = 18 + 25 − 1 = 42.",
  },
  {
    id: 70,
    section: "Intellectual Potential",
    question:
      "Complete the analogy: Pressure : Pascal :: Power : ?",
    options: ["Joule", "Newton", "Watt", "Ampere"],
    correctAnswer: "Watt",
    explanation:
      "Pascal is the SI unit of pressure, while Watt is the SI unit of power.",
  },
  {
    id: 71,
    section: "Intellectual Potential",
    question:
      "Find the missing number: 2, 6, 15, 31, 56, ?",
    options: ["82", "88", "92", "96"],
    correctAnswer: "92",
    explanation:
      "Differences are 4, 9, 16, 25, which are 2², 3², 4², 5². Next difference is 6² = 36. Therefore 56 + 36 = 92.",
  },
  // ========== INTELLECTUAL POTENTIAL / REASONING: Q72-Q81 ==========

  {
    id: 72,
    section: "Intellectual Potential",
    question:
      "Find the next term in the series: 4, 9, 19, 39, 79, ?",
    options: ["139", "149", "159", "169"],
    correctAnswer: "159",
    explanation:
      "Pattern is ×2 + 1. Therefore 79 × 2 + 1 = 159.",
  },
  {
    id: 73,
    section: "Intellectual Potential",
    question:
      "If PLANT is written as QMBOU in a certain code, how will GEAR be written in the same code?",
    options: ["HFBS", "HFBQ", "GFBS", "IGCT"],
    correctAnswer: "HFBS",
    explanation:
      "Each letter is replaced by the next letter in the alphabet: G→H, E→F, A→B, R→S.",
  },
  {
    id: 74,
    section: "Intellectual Potential",
    question:
      "Introducing a man, a woman said, 'His wife is the only daughter of my father.' How is the man related to the woman?",
    options: ["Brother", "Father", "Husband", "Uncle"],
    correctAnswer: "Husband",
    explanation:
      "The only daughter of the woman's father is the woman herself. Therefore the man is her husband.",
  },
  {
    id: 75,
    section: "Intellectual Potential",
    question:
      "A person walks 8 km east, turns left and walks 6 km, then turns left and walks 8 km. How far and in which direction is he from the starting point?",
    options: ["6 km North", "6 km South", "8 km North", "14 km West"],
    correctAnswer: "6 km North",
    explanation:
      "The 8 km east and 8 km west movements cancel. The person remains 6 km north of the starting point.",
  },
  {
    id: 76,
    section: "Intellectual Potential",
    question:
      "Statements: All pumps are machines. No machine is a tree. Conclusions: I. No pump is a tree. II. Some trees are pumps. Which conclusion follows?",
    options: [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    correctAnswer: "Only I follows",
    explanation:
      "All pumps belong to the set of machines, and no machine is a tree. Therefore no pump can be a tree.",
  },
  {
    id: 77,
    section: "Intellectual Potential",
    question:
      "Seven persons A, B, C, D, E, F and G are sitting in a row facing north. D sits exactly in the middle. A is second to the left of D. B is immediately right of A. G is at the extreme right. E is immediately left of G. Who sits second from the right?",
    options: ["C", "D", "E", "F"],
    correctAnswer: "E",
    explanation:
      "Since G is at the extreme right and E is immediately left of G, E is second from the right.",
  },
  {
    id: 78,
    section: "Intellectual Potential",
    question:
      "In a certain ranking, R is 17th from the top and 29th from the bottom. How many persons are there in total?",
    options: ["44", "45", "46", "47"],
    correctAnswer: "45",
    explanation:
      "Total persons = 17 + 29 − 1 = 45.",
  },
  {
    id: 79,
    section: "Intellectual Potential",
    question:
      "Complete the analogy: 8 : 72 :: 12 : ?",
    options: ["132", "144", "156", "168"],
    correctAnswer: "156",
    explanation:
      "The relation is n × (n + 1). Thus 8×9 = 72 and 12×13 = 156.",
  },
  {
    id: 80,
    section: "Intellectual Potential",
    question:
      "If the letters in the word TURBINE are arranged in alphabetical order, which letter will be fourth from the left?",
    options: ["I", "N", "R", "T"],
    correctAnswer: "N",
    explanation:
      "Alphabetical order is B, E, I, N, R, T, U. Therefore the fourth letter is N.",
  },
  {
    id: 81,
    section: "Intellectual Potential",
    question:
      "Find the missing number in the series: 1, 5, 14, 30, 55, ?",
    options: ["81", "85", "91", "95"],
    correctAnswer: "91",
    explanation:
      "Successive differences are 4, 9, 16, 25 = 2², 3², 4², 5². Next difference = 6² = 36. Therefore 55 + 36 = 91.",
  },
  // ========== INTELLECTUAL POTENTIAL / REASONING: Q82-Q85 ==========

  {
    id: 82,
    section: "Intellectual Potential",
    question:
      "In a certain code, 'plant gives oxygen' is written as 'ka mi zo', 'oxygen supports life' is written as 'zo ra ti', and 'plant supports growth' is written as 'ka ra nu'. What is the code for 'supports'?",
    options: ["ka", "zo", "ra", "ti"],
    correctAnswer: "ra",
    explanation:
      "'Supports' is common to the second and third statements. The common code in those statements is 'ra'.",
  },
  {
    id: 83,
    section: "Intellectual Potential",
    question:
      "Statement: The company has made wearing safety helmets compulsory inside the plant area. Which assumption is implicit? I. There is a possibility of head injury inside the plant area. II. Safety helmets can reduce the risk of head injury.",
    options: [
      "Only I is implicit",
      "Only II is implicit",
      "Both I and II are implicit",
      "Neither I nor II is implicit",
    ],
    correctAnswer: "Both I and II are implicit",
    explanation:
      "Making helmets compulsory assumes that head-injury risk exists and that helmets can help reduce that risk.",
  },
  {
    id: 84,
    section: "Intellectual Potential",
    question:
      "Eight persons P, Q, R, S, T, U, V and W sit around a circular table facing the centre. Q sits second to the right of P. R sits opposite P. S sits immediately left of R. If T sits opposite Q, who sits immediately right of R?",
    options: ["S", "T", "Cannot be determined", "P"],
    correctAnswer: "Cannot be determined",
    explanation:
      "The given information fixes some relative positions, but the person immediately right of R is not uniquely determined from the stated conditions.",
  },
  {
    id: 85,
    section: "Intellectual Potential",
    question:
      "A cube has all its faces painted red and is cut into 64 identical smaller cubes. How many smaller cubes have exactly two faces painted?",
    options: ["16", "24", "32", "36"],
    correctAnswer: "24",
    explanation:
      "Since 64 = 4³, the large cube is divided into 4 parts along each edge. Cubes with exactly two painted faces lie on edges excluding corners: 12 × (4 − 2) = 24.",
  },
  // ========== MECHANICAL DOMAIN: Q86-Q95 ==========

  {
    id: 86,
    section: "Mechanical",
    question:
      "For an ideal gas undergoing a reversible adiabatic process, which relation is correct?",
    options: ["PV = constant", "PV^γ = constant", "P/T = constant", "VT = constant"],
    correctAnswer: "PV^γ = constant",
    explanation:
      "For a reversible adiabatic process of an ideal gas, pressure and volume satisfy PV^γ = constant, where γ = Cp/Cv.",
  },
  {
    id: 87,
    section: "Mechanical",
    question:
      "An air-standard Otto cycle has a compression ratio of 8. If γ = 1.4, the thermal efficiency is approximately:",
    options: ["43.5%", "56.5%", "62.8%", "68.2%"],
    correctAnswer: "56.5%",
    explanation:
      "For an Otto cycle, η = 1 − 1/r^(γ−1). Thus η = 1 − 1/8^0.4 ≈ 0.565 or 56.5%.",
  },
  {
    id: 88,
    section: "Mechanical",
    question:
      "In a throttling process under steady-flow conditions, which property remains constant?",
    options: ["Entropy", "Temperature", "Enthalpy", "Internal energy"],
    correctAnswer: "Enthalpy",
    explanation:
      "For an ideal throttling process with negligible changes in kinetic and potential energies, h₁ = h₂.",
  },
  {
    id: 89,
    section: "Mechanical",
    question:
      "A Carnot engine operates between 600 K and 300 K. Its maximum possible thermal efficiency is:",
    options: ["25%", "40%", "50%", "60%"],
    correctAnswer: "50%",
    explanation:
      "Carnot efficiency η = 1 − TL/TH = 1 − 300/600 = 0.5 or 50%.",
  },
  {
    id: 90,
    section: "Mechanical",
    question:
      "For a closed system executing a complete thermodynamic cycle, the net change in internal energy is:",
    options: ["Positive", "Negative", "Zero", "Equal to heat rejected"],
    correctAnswer: "Zero",
    explanation:
      "Internal energy is a state property. Since the system returns to its initial state after a complete cycle, ΔUcycle = 0.",
  },
  {
    id: 91,
    section: "Mechanical",
    question:
      "The critical radius of insulation for a cylindrical pipe is given by:",
    options: ["k/h", "2k/h", "h/k", "k/2h"],
    correctAnswer: "k/h",
    explanation:
      "For a cylindrical geometry, critical radius of insulation is rc = k/h, where k is insulation thermal conductivity and h is the external convective heat-transfer coefficient.",
  },
  {
    id: 92,
    section: "Mechanical",
    question:
      "A plane wall of thickness 0.2 m and thermal conductivity 2 W/(m·K) has its two surfaces maintained at 150°C and 50°C. The steady heat flux through the wall is:",
    options: ["500 W/m²", "750 W/m²", "1000 W/m²", "1500 W/m²"],
    correctAnswer: "1000 W/m²",
    explanation:
      "Using Fourier's law, q'' = kΔT/L = 2×(150−50)/0.2 = 1000 W/m².",
  },
  {
    id: 93,
    section: "Mechanical",
    question:
      "For fully developed laminar flow through a circular pipe with constant wall temperature, the Nusselt number is:",
    options: ["2.0", "3.66", "4.36", "5.0"],
    correctAnswer: "3.66",
    explanation:
      "For thermally and hydrodynamically fully developed laminar flow in a circular tube with constant wall temperature, Nu = 3.66.",
  },
  {
    id: 94,
    section: "Mechanical",
    question:
      "The effectiveness of a heat exchanger is defined as the ratio of:",
    options: [
      "Actual heat transfer to maximum possible heat transfer",
      "Maximum possible heat transfer to actual heat transfer",
      "Heat lost to heat supplied",
      "Outlet temperature difference to inlet temperature difference",
    ],
    correctAnswer: "Actual heat transfer to maximum possible heat transfer",
    explanation:
      "Heat exchanger effectiveness is ε = q_actual/q_max.",
  },
  {
    id: 95,
    section: "Mechanical",
    question:
      "For the same terminal temperatures, which heat-exchanger arrangement generally provides the largest logarithmic mean temperature difference?",
    options: ["Parallel flow", "Counter flow", "Cross flow always", "All are always equal"],
    correctAnswer: "Counter flow",
    explanation:
      "A counter-flow heat exchanger generally maintains a more uniform temperature difference and provides a larger LMTD than parallel flow for comparable terminal conditions.",
  },
  // ========== MECHANICAL DOMAIN: Q96-Q105 ==========

  {
    id: 96,
    section: "Mechanical",
    question:
      "For steady incompressible flow through a pipe, the continuity equation between two sections is:",
    options: ["A₁V₁ = A₂V₂", "A₁/V₁ = A₂/V₂", "A₁V₂ = A₂V₁", "A₁P₁ = A₂P₂"],
    correctAnswer: "A₁V₁ = A₂V₂",
    explanation:
      "For steady incompressible flow, mass conservation gives ρA₁V₁ = ρA₂V₂. Since density is constant, A₁V₁ = A₂V₂.",
  },
  {
    id: 97,
    section: "Mechanical",
    question:
      "Water flows through a horizontal pipe whose diameter decreases from 200 mm to 100 mm. If the velocity in the larger section is 2 m/s, the velocity in the smaller section is:",
    options: ["4 m/s", "6 m/s", "8 m/s", "10 m/s"],
    correctAnswer: "8 m/s",
    explanation:
      "By continuity, A₁V₁ = A₂V₂. Since area is proportional to diameter squared, V₂ = V₁(D₁/D₂)² = 2×(200/100)² = 8 m/s.",
  },
  {
    id: 98,
    section: "Mechanical",
    question:
      "The hydraulic gradient line represents the variation of:",
    options: [
      "Pressure head only",
      "Velocity head only",
      "Piezometric head",
      "Total energy head",
    ],
    correctAnswer: "Piezometric head",
    explanation:
      "The hydraulic gradient line represents z + p/(ρg), which is the piezometric head.",
  },
  {
    id: 99,
    section: "Mechanical",
    question:
      "For fully developed laminar flow in a circular pipe, the ratio of maximum velocity to average velocity is:",
    options: ["1.0", "1.5", "2.0", "2.5"],
    correctAnswer: "2.0",
    explanation:
      "The laminar velocity profile in a circular pipe is parabolic, giving Vmax = 2Vavg.",
  },
  {
    id: 100,
    section: "Mechanical",
    question:
      "The Darcy friction factor for fully developed laminar flow in a circular pipe is:",
    options: ["16/Re", "32/Re", "64/Re", "0.316/Re"],
    correctAnswer: "64/Re",
    explanation:
      "For fully developed laminar pipe flow, the Darcy friction factor is f = 64/Re.",
  },
  {
    id: 101,
    section: "Mechanical",
    question:
      "A differential manometer is primarily used to measure:",
    options: [
      "Absolute pressure at one point",
      "Atmospheric pressure",
      "Pressure difference between two points",
      "Fluid velocity directly",
    ],
    correctAnswer: "Pressure difference between two points",
    explanation:
      "A differential manometer measures the pressure difference between two locations in a fluid system.",
  },
  {
    id: 102,
    section: "Mechanical",
    question:
      "Boundary-layer separation on a solid surface is mainly promoted by:",
    options: [
      "Favourable pressure gradient",
      "Adverse pressure gradient",
      "Zero viscosity",
      "Increasing Reynolds number only",
    ],
    correctAnswer: "Adverse pressure gradient",
    explanation:
      "An adverse pressure gradient causes the fluid pressure to increase in the flow direction, decelerating near-wall fluid and potentially causing flow reversal and separation.",
  },
  {
    id: 103,
    section: "Mechanical",
    question:
      "Cavitation in a centrifugal pump begins when the local absolute pressure falls below the:",
    options: [
      "Atmospheric pressure",
      "Discharge pressure",
      "Vapour pressure of the liquid",
      "Critical pressure of the liquid",
    ],
    correctAnswer: "Vapour pressure of the liquid",
    explanation:
      "When local absolute pressure falls below the liquid vapour pressure, vapour bubbles form and subsequently collapse, producing cavitation.",
  },
  {
    id: 104,
    section: "Mechanical",
    question:
      "The specific speed of a centrifugal pump is primarily used to:",
    options: [
      "Determine pipe friction",
      "Classify pump impeller type",
      "Measure pump efficiency directly",
      "Calculate fluid viscosity",
    ],
    correctAnswer: "Classify pump impeller type",
    explanation:
      "Specific speed is a similarity parameter used to compare pump designs and select or classify suitable impeller geometry.",
  },
  {
    id: 105,
    section: "Mechanical",
    question:
      "A centrifugal pump delivers water at a discharge of 0.05 m³/s against a head of 20 m. Neglecting losses, the hydraulic power delivered to water is approximately:",
    options: ["4.91 kW", "7.85 kW", "9.81 kW", "12.5 kW"],
    correctAnswer: "9.81 kW",
    explanation:
      "Hydraulic power = ρgQH = 1000×9.81×0.05×20 = 9810 W = 9.81 kW.",
  },
  // ========== MECHANICAL DOMAIN: Q106-Q115 ==========

  {
    id: 106,
    section: "Mechanical",
    question:
      "A steel bar of uniform cross-sectional area 500 mm² is subjected to an axial tensile load of 100 kN. The normal stress developed in the bar is:",
    options: ["100 MPa", "150 MPa", "200 MPa", "250 MPa"],
    correctAnswer: "200 MPa",
    explanation:
      "Normal stress = P/A = 100000/500 = 200 N/mm² = 200 MPa.",
  },
  {
    id: 107,
    section: "Mechanical",
    question:
      "For a material obeying Hooke's law within the elastic limit, Young's modulus is the ratio of:",
    options: [
      "Shear stress to shear strain",
      "Normal stress to longitudinal strain",
      "Volumetric stress to volumetric strain",
      "Lateral strain to longitudinal strain",
    ],
    correctAnswer: "Normal stress to longitudinal strain",
    explanation:
      "Young's modulus is E = normal stress / longitudinal strain within the linear elastic range.",
  },
  {
    id: 108,
    section: "Mechanical",
    question:
      "A simply supported beam of span L carries a concentrated load W at its mid-span. The maximum bending moment is:",
    options: ["WL/2", "WL/4", "WL/8", "WL"],
    correctAnswer: "WL/4",
    explanation:
      "For a central point load on a simply supported beam, each reaction is W/2 and maximum bending moment at mid-span is (W/2)(L/2) = WL/4.",
  },
  {
    id: 109,
    section: "Mechanical",
    question:
      "At a point in a stressed body, the principal stresses are 100 MPa and 40 MPa. The maximum in-plane shear stress is:",
    options: ["20 MPa", "30 MPa", "40 MPa", "70 MPa"],
    correctAnswer: "30 MPa",
    explanation:
      "Maximum in-plane shear stress = (σ₁ − σ₂)/2 = (100 − 40)/2 = 30 MPa.",
  },
  {
    id: 110,
    section: "Mechanical",
    question:
      "According to Euler's theory, the crippling load for a long column with both ends hinged is:",
    options: [
      "π²EI/L²",
      "2π²EI/L²",
      "4π²EI/L²",
      "π²EI/4L²",
    ],
    correctAnswer: "π²EI/L²",
    explanation:
      "Euler buckling load is Pcr = π²EI/Le². For both ends hinged, effective length Le = L.",
  },
  {
    id: 111,
    section: "Mechanical",
    question:
      "For a solid circular shaft subjected to pure torsion, the maximum shear stress occurs at:",
    options: [
      "The centre",
      "Half the radius",
      "The outer surface",
      "Every point equally",
    ],
    correctAnswer: "The outer surface",
    explanation:
      "From τ = Tr/J, shear stress varies linearly with radius and is maximum at the outer radius.",
  },
  {
    id: 112,
    section: "Mechanical",
    question:
      "In a four-bar mechanism, Grashof's law for at least one link to make a complete revolution is:",
    options: [
      "s + l ≤ p + q",
      "s + l ≥ p + q",
      "s + p ≤ l + q",
      "s = l = p = q",
    ],
    correctAnswer: "s + l ≤ p + q",
    explanation:
      "Grashof's criterion states that the sum of shortest and longest links must be less than or equal to the sum of the other two links.",
  },
  {
    id: 113,
    section: "Mechanical",
    question:
      "The primary function of a flywheel in a machine is to:",
    options: [
      "Control the mean speed of the engine",
      "Reduce cyclic fluctuation of speed",
      "Increase engine power",
      "Balance rotating masses completely",
    ],
    correctAnswer: "Reduce cyclic fluctuation of speed",
    explanation:
      "A flywheel stores and releases kinetic energy during a cycle, thereby reducing cyclic speed fluctuations.",
  },
  {
    id: 114,
    section: "Mechanical",
    question:
      "A gear has 20 teeth and a module of 5 mm. Its pitch-circle diameter is:",
    options: ["25 mm", "50 mm", "100 mm", "125 mm"],
    correctAnswer: "100 mm",
    explanation:
      "Module m = d/T. Therefore pitch diameter d = mT = 5×20 = 100 mm.",
  },
  {
    id: 115,
    section: "Mechanical",
    question:
      "For complete dynamic balancing of several rotating masses in different planes, which conditions must be satisfied?",
    options: [
      "Resultant force is zero only",
      "Resultant couple is zero only",
      "Both resultant force and resultant couple are zero",
      "Angular velocities of all masses are different",
    ],
    correctAnswer: "Both resultant force and resultant couple are zero",
    explanation:
      "Complete dynamic balance requires zero resultant centrifugal force and zero resultant centrifugal couple.",
  },
  // ========== MECHANICAL DOMAIN: Q116-Q125 ==========

  {
    id: 116,
    section: "Mechanical",
    question:
      "According to the maximum shear stress theory, yielding begins when the maximum shear stress reaches:",
    options: [
      "Yield stress in simple tension",
      "Half the yield stress in simple tension",
      "Twice the yield stress in simple tension",
      "Ultimate tensile stress",
    ],
    correctAnswer: "Half the yield stress in simple tension",
    explanation:
      "According to Tresca theory, yielding begins when maximum shear stress equals σy/2, where σy is the yield stress in simple tension.",
  },
  {
    id: 117,
    section: "Mechanical",
    question:
      "A power-transmitting shaft is subjected to a torque of 2 kN·m at 200 rpm. The power transmitted is approximately:",
    options: ["20.94 kW", "31.42 kW", "41.89 kW", "62.83 kW"],
    correctAnswer: "41.89 kW",
    explanation:
      "Power P = 2πNT/60 = 2π×200×2000/60 ≈ 41888 W = 41.89 kW.",
  },
  {
    id: 118,
    section: "Mechanical",
    question:
      "The main purpose of providing a key between a shaft and a hub is to:",
    options: [
      "Prevent relative rotational motion",
      "Prevent axial motion only",
      "Reduce shaft diameter",
      "Increase bearing life",
    ],
    correctAnswer: "Prevent relative rotational motion",
    explanation:
      "A key transmits torque between the shaft and hub by preventing relative angular or rotational motion.",
  },
  {
    id: 119,
    section: "Mechanical",
    question:
      "For a square-threaded screw, self-locking is possible when:",
    options: [
      "Helix angle is greater than friction angle",
      "Helix angle is less than friction angle",
      "Helix angle equals 90°",
      "Coefficient of friction is zero",
    ],
    correctAnswer: "Helix angle is less than friction angle",
    explanation:
      "A power screw is self-locking when the friction angle exceeds the helix angle, i.e. φ > α.",
  },
  {
    id: 120,
    section: "Mechanical",
    question:
      "The Soderberg criterion for fluctuating stresses uses:",
    options: [
      "Ultimate strength and endurance limit",
      "Yield strength and endurance limit",
      "Yield strength and ultimate strength",
      "Only endurance limit",
    ],
    correctAnswer: "Yield strength and endurance limit",
    explanation:
      "The Soderberg line connects endurance strength on the alternating-stress axis and yield strength on the mean-stress axis.",
  },
  {
    id: 121,
    section: "Mechanical",
    question:
      "In orthogonal metal cutting, the chip-thickness ratio is defined as:",
    options: ["t₂/t₁", "t₁/t₂", "b₁/b₂", "Vc/V"],
    correctAnswer: "t₁/t₂",
    explanation:
      "Chip-thickness ratio r is the ratio of uncut chip thickness t₁ to chip thickness after cutting t₂.",
  },
  {
    id: 122,
    section: "Mechanical",
    question:
      "According to Taylor's tool-life equation VTⁿ = C, if cutting speed is increased, tool life generally:",
    options: ["Increases", "Decreases", "Remains unchanged", "First increases then remains constant"],
    correctAnswer: "Decreases",
    explanation:
      "From VTⁿ = C, increasing cutting speed V requires a decrease in tool life T for constant C and positive n.",
  },
  {
    id: 123,
    section: "Mechanical",
    question:
      "In a centre lathe, the operation used to produce a conical surface is called:",
    options: ["Facing", "Knurling", "Taper turning", "Parting"],
    correctAnswer: "Taper turning",
    explanation:
      "Taper turning produces a conical surface by progressively changing the workpiece diameter along its length.",
  },
  {
    id: 124,
    section: "Mechanical",
    question:
      "Which casting defect is primarily caused by entrapped gas in molten metal?",
    options: ["Blowholes", "Cold shut", "Mismatch", "Hot tear"],
    correctAnswer: "Blowholes",
    explanation:
      "Blowholes are gas cavities formed due to trapped gases, excessive moisture, or poor mould permeability.",
  },
  {
    id: 125,
    section: "Mechanical",
    question:
      "In arc welding, the heat required for fusion is generated primarily by:",
    options: [
      "Mechanical friction",
      "Electrical arc",
      "Chemical pressure",
      "Plastic deformation",
    ],
    correctAnswer: "Electrical arc",
    explanation:
      "Arc welding uses the intense heat generated by an electrical arc between the electrode and workpiece.",
  },
  // ========== MECHANICAL DOMAIN: Q126-Q135 ==========

  {
    id: 126,
    section: "Mechanical",
    question:
      "In up milling, the direction of cutter rotation at the point of contact is:",
    options: [
      "Same as the direction of feed",
      "Opposite to the direction of feed",
      "Perpendicular to the direction of feed",
      "Independent of feed direction",
    ],
    correctAnswer: "Opposite to the direction of feed",
    explanation:
      "In up milling or conventional milling, the cutter motion at the point of contact is opposite to the workpiece feed direction.",
  },
  {
    id: 127,
    section: "Mechanical",
    question:
      "In a grinding operation, glazing of the wheel occurs when:",
    options: [
      "Abrasive grains fracture rapidly",
      "Dull abrasive grains remain attached to the wheel",
      "Bond material is excessively removed",
      "Wheel speed becomes zero",
    ],
    correctAnswer: "Dull abrasive grains remain attached to the wheel",
    explanation:
      "Glazing occurs when worn and dull abrasive grains are not released from the grinding wheel, producing a smooth shiny surface.",
  },
  {
    id: 128,
    section: "Mechanical",
    question:
      "The least count of a metric micrometer having a screw pitch of 0.5 mm and 50 divisions on its circular scale is:",
    options: ["0.1 mm", "0.05 mm", "0.01 mm", "0.005 mm"],
    correctAnswer: "0.01 mm",
    explanation:
      "Least count = pitch / number of circular-scale divisions = 0.5/50 = 0.01 mm.",
  },
  {
    id: 129,
    section: "Mechanical",
    question:
      "A sine bar is primarily used for:",
    options: [
      "Measuring surface roughness",
      "Precision measurement and setting of angles",
      "Checking circularity",
      "Measuring thread pitch",
    ],
    correctAnswer: "Precision measurement and setting of angles",
    explanation:
      "A sine bar uses the sine principle with slip gauges for precise measurement or setting of angles.",
  },
  {
    id: 130,
    section: "Mechanical",
    question:
      "In the hole-basis system of limits and fits, the fundamental deviation of the basic hole is:",
    options: [
      "Upper deviation equal to zero",
      "Lower deviation equal to zero",
      "Both deviations equal to zero",
      "Always negative",
    ],
    correctAnswer: "Lower deviation equal to zero",
    explanation:
      "For the basic hole designated H, the lower deviation is zero and different fits are obtained by varying the shaft tolerance position.",
  },
  {
    id: 131,
    section: "Mechanical",
    question:
      "The economic order quantity model minimizes the total of:",
    options: [
      "Purchase and production costs",
      "Ordering and inventory carrying costs",
      "Shortage and selling costs",
      "Inspection and maintenance costs",
    ],
    correctAnswer: "Ordering and inventory carrying costs",
    explanation:
      "The basic EOQ model balances ordering cost against inventory holding or carrying cost.",
  },
  {
    id: 132,
    section: "Mechanical",
    question:
      "Annual demand for an item is 10,000 units, ordering cost is ₹200 per order, and inventory carrying cost is ₹8 per unit per year. The EOQ is approximately:",
    options: ["500 units", "707 units", "800 units", "1000 units"],
    correctAnswer: "707 units",
    explanation:
      "EOQ = √(2DS/H) = √(2×10000×200/8) = √500000 ≈ 707 units.",
  },
  {
    id: 133,
    section: "Mechanical",
    question:
      "In PERT, the expected activity time te is calculated from optimistic time to, most likely time tm, and pessimistic time tp as:",
    options: [
      "(to + tm + tp)/3",
      "(to + 2tm + tp)/4",
      "(to + 4tm + tp)/6",
      "(2to + 3tm + tp)/6",
    ],
    correctAnswer: "(to + 4tm + tp)/6",
    explanation:
      "PERT uses the beta-distribution weighted estimate te = (to + 4tm + tp)/6.",
  },
  {
    id: 134,
    section: "Mechanical",
    question:
      "In a CPM network, activities lying on the critical path have:",
    options: [
      "Maximum positive total float",
      "Zero total float",
      "Negative duration",
      "Maximum free float",
    ],
    correctAnswer: "Zero total float",
    explanation:
      "Critical-path activities have zero total float, so delay in them directly delays project completion.",
  },
  {
    id: 135,
    section: "Mechanical",
    question:
      "A work study consists primarily of:",
    options: [
      "Method study and work measurement",
      "Production planning and quality control",
      "Inventory control and maintenance",
      "Job evaluation and forecasting",
    ],
    correctAnswer: "Method study and work measurement",
    explanation:
      "Work study is the systematic combination of method study and work measurement.",
  },
  // ========== MECHANICAL DOMAIN: Q136-Q145 ==========

  {
    id: 136,
    section: "Mechanical",
    question:
      "The air-standard efficiency of an Otto cycle depends primarily on:",
    options: [
      "Cut-off ratio only",
      "Compression ratio and specific heat ratio",
      "Pressure ratio only",
      "Maximum cycle temperature only",
    ],
    correctAnswer: "Compression ratio and specific heat ratio",
    explanation:
      "For an air-standard Otto cycle, η = 1 − 1/r^(γ−1). Hence efficiency depends on compression ratio r and specific heat ratio γ.",
  },
  {
    id: 137,
    section: "Mechanical",
    question:
      "In a four-stroke internal combustion engine, one complete thermodynamic cycle requires:",
    options: [
      "One crankshaft revolution",
      "Two crankshaft revolutions",
      "Three crankshaft revolutions",
      "Four crankshaft revolutions",
    ],
    correctAnswer: "Two crankshaft revolutions",
    explanation:
      "A four-stroke engine completes suction, compression, power and exhaust strokes in two crankshaft revolutions.",
  },
  {
    id: 138,
    section: "Mechanical",
    question:
      "The indicated power of a reciprocating engine is 50 kW and its brake power is 40 kW. The mechanical efficiency is:",
    options: ["70%", "75%", "80%", "90%"],
    correctAnswer: "80%",
    explanation:
      "Mechanical efficiency = BP/IP = 40/50 = 0.8 = 80%.",
  },
  {
    id: 139,
    section: "Mechanical",
    question:
      "Knocking tendency in a spark-ignition engine can generally be reduced by using a fuel with:",
    options: [
      "Lower octane number",
      "Higher octane number",
      "Higher cetane number only",
      "Lower flash point only",
    ],
    correctAnswer: "Higher octane number",
    explanation:
      "A higher octane number indicates greater resistance to auto-ignition and therefore reduces knocking tendency in SI engines.",
  },
  {
    id: 140,
    section: "Mechanical",
    question:
      "The primary purpose of supercharging an internal combustion engine is to:",
    options: [
      "Reduce lubricating-oil consumption",
      "Increase the mass of air inducted into the cylinder",
      "Reduce compression ratio to zero",
      "Eliminate exhaust gases completely",
    ],
    correctAnswer: "Increase the mass of air inducted into the cylinder",
    explanation:
      "Supercharging raises intake-air density and increases the mass of air supplied to the cylinder, allowing more fuel to be burned and increasing power output.",
  },
  {
    id: 141,
    section: "Mechanical",
    question:
      "The coefficient of performance of a refrigerator is defined as:",
    options: [
      "Work input divided by refrigerating effect",
      "Refrigerating effect divided by work input",
      "Heat rejected divided by refrigerating effect",
      "Work output divided by heat supplied",
    ],
    correctAnswer: "Refrigerating effect divided by work input",
    explanation:
      "For a refrigerator, COP_R = QL/W, where QL is the refrigerating effect and W is the required work input.",
  },
  {
    id: 142,
    section: "Mechanical",
    question:
      "A refrigerator removes 15 kW of heat from a refrigerated space while consuming 5 kW of power. Its COP is:",
    options: ["2", "3", "4", "5"],
    correctAnswer: "3",
    explanation:
      "COP = Refrigerating effect / Work input = 15/5 = 3.",
  },
  {
    id: 143,
    section: "Mechanical",
    question:
      "In an ideal vapour-compression refrigeration cycle, the expansion process through the throttling valve is:",
    options: [
      "Isentropic",
      "Isothermal",
      "Isenthalpic",
      "Constant-volume",
    ],
    correctAnswer: "Isenthalpic",
    explanation:
      "The ideal expansion valve is a throttling device, so the process occurs at approximately constant enthalpy, h3 = h4.",
  },
  {
    id: 144,
    section: "Mechanical",
    question:
      "For unsaturated moist air, the dry-bulb temperature is generally:",
    options: [
      "Less than wet-bulb temperature",
      "Equal to or greater than wet-bulb temperature",
      "Always equal to dew-point temperature",
      "Always below dew-point temperature",
    ],
    correctAnswer: "Equal to or greater than wet-bulb temperature",
    explanation:
      "For unsaturated air, DBT > WBT > DPT. At saturation, dry-bulb, wet-bulb and dew-point temperatures become equal.",
  },
  {
    id: 145,
    section: "Mechanical",
    question:
      "Sensible heating of moist air without addition or removal of moisture causes:",
    options: [
      "Specific humidity to increase",
      "Specific humidity to decrease",
      "Specific humidity to remain constant",
      "Relative humidity to become 100%",
    ],
    correctAnswer: "Specific humidity to remain constant",
    explanation:
      "During sensible heating, no moisture is added or removed. Therefore humidity ratio or specific humidity remains constant while dry-bulb temperature rises.",
  },
  // ========== MECHANICAL DOMAIN: Q146-Q155 ==========

  {
    id: 146,
    section: "Mechanical",
    question:
      "In an ideal Rankine cycle, the process occurring in the steam turbine is:",
    options: [
      "Isobaric heat addition",
      "Isentropic expansion",
      "Isothermal expansion",
      "Isenthalpic expansion",
    ],
    correctAnswer: "Isentropic expansion",
    explanation:
      "In the ideal Rankine cycle, steam expands reversibly and adiabatically through the turbine; therefore the process is isentropic.",
  },
  {
    id: 147,
    section: "Mechanical",
    question:
      "The primary purpose of superheating steam before its expansion in a steam turbine is to:",
    options: [
      "Increase moisture content at turbine exit",
      "Reduce turbine work output",
      "Increase turbine work and reduce exit moisture",
      "Decrease boiler pressure",
    ],
    correctAnswer: "Increase turbine work and reduce exit moisture",
    explanation:
      "Superheating increases the available enthalpy drop through the turbine and generally improves steam quality at the turbine exit.",
  },
  {
    id: 148,
    section: "Mechanical",
    question:
      "In a steam power plant, an economiser is used to:",
    options: [
      "Superheat steam",
      "Preheat boiler feedwater using flue gases",
      "Heat combustion air",
      "Condense exhaust steam",
    ],
    correctAnswer: "Preheat boiler feedwater using flue gases",
    explanation:
      "An economiser recovers waste heat from outgoing flue gases to raise the temperature of boiler feedwater.",
  },
  {
    id: 149,
    section: "Mechanical",
    question:
      "Which boiler mounting protects a boiler from excessive steam pressure?",
    options: [
      "Feed check valve",
      "Blow-off cock",
      "Safety valve",
      "Fusible plug",
    ],
    correctAnswer: "Safety valve",
    explanation:
      "A safety valve automatically releases steam when boiler pressure exceeds the permissible limit.",
  },
  {
    id: 150,
    section: "Mechanical",
    question:
      "The function of a condenser in a steam power plant is primarily to:",
    options: [
      "Increase turbine back pressure",
      "Condense turbine exhaust steam and maintain low exhaust pressure",
      "Superheat steam before turbine entry",
      "Increase boiler blowdown",
    ],
    correctAnswer: "Condense turbine exhaust steam and maintain low exhaust pressure",
    explanation:
      "The condenser converts exhaust steam into condensate and maintains a low turbine exhaust pressure, improving turbine work output.",
  },
  {
    id: 151,
    section: "Mechanical",
    question:
      "In an impulse steam turbine stage, the entire pressure drop ideally occurs in the:",
    options: [
      "Moving blades only",
      "Fixed nozzles",
      "Condenser",
      "Shaft bearings",
    ],
    correctAnswer: "Fixed nozzles",
    explanation:
      "In an ideal impulse stage, steam expands through stationary nozzles and converts pressure energy into kinetic energy before entering the moving blades.",
  },
  {
    id: 152,
    section: "Mechanical",
    question:
      "For an ideal gas, the minimum work of compression between two fixed pressures is obtained with:",
    options: [
      "Adiabatic compression",
      "Isothermal compression",
      "Constant-volume compression",
      "Free compression",
    ],
    correctAnswer: "Isothermal compression",
    explanation:
      "For fixed inlet and outlet pressures, ideal isothermal compression requires the minimum work input.",
  },
  {
    id: 153,
    section: "Mechanical",
    question:
      "The main purpose of intercooling in a multistage reciprocating compressor is to:",
    options: [
      "Increase compression work",
      "Reduce compression work",
      "Increase clearance volume",
      "Decrease volumetric efficiency deliberately",
    ],
    correctAnswer: "Reduce compression work",
    explanation:
      "Intercooling lowers the air temperature between stages, reducing specific volume and hence reducing total compression work.",
  },
  {
    id: 154,
    section: "Mechanical",
    question:
      "For perfect intercooling in a two-stage reciprocating compressor, the optimum intermediate pressure is:",
    options: [
      "P₁ + P₃",
      "(P₁ + P₃)/2",
      "√(P₁P₃)",
      "P₁P₃",
    ],
    correctAnswer: "√(P₁P₃)",
    explanation:
      "For minimum work with perfect intercooling and equal pressure ratios, the optimum intermediate pressure is the geometric mean: P₂ = √(P₁P₃).",
  },
  {
    id: 155,
    section: "Mechanical",
    question:
      "A compressor receives 5 kg/s of air and requires a specific work input of 180 kJ/kg. Neglecting mechanical losses, the required power is:",
    options: ["360 kW", "540 kW", "720 kW", "900 kW"],
    correctAnswer: "900 kW",
    explanation:
      "Power input = mass flow rate × specific work = 5×180 = 900 kJ/s = 900 kW.",
  },
  // ========== MECHANICAL DOMAIN: Q156-Q165 ==========

  {
    id: 156,
    section: "Mechanical",
    question:
      "The eutectoid composition of plain carbon steel in the iron-carbon equilibrium diagram is approximately:",
    options: ["0.2% C", "0.4% C", "0.76% C", "2.11% C"],
    correctAnswer: "0.76% C",
    explanation:
      "The eutectoid composition is approximately 0.76 wt% carbon, at which austenite transforms into pearlite under equilibrium cooling.",
  },
  {
    id: 157,
    section: "Mechanical",
    question:
      "Which heat-treatment process involves heating steel above the critical temperature, soaking, and then cooling slowly inside the furnace?",
    options: ["Annealing", "Normalizing", "Hardening", "Tempering"],
    correctAnswer: "Annealing",
    explanation:
      "In full annealing, steel is heated above the critical range, soaked, and slowly furnace-cooled to soften the material and improve ductility.",
  },
  {
    id: 158,
    section: "Mechanical",
    question:
      "The principal purpose of tempering a hardened steel component is to:",
    options: [
      "Increase brittleness",
      "Reduce brittleness and relieve internal stresses",
      "Increase carbon content",
      "Produce only martensite",
    ],
    correctAnswer: "Reduce brittleness and relieve internal stresses",
    explanation:
      "Tempering reduces excessive brittleness of hardened martensitic steel, relieves residual stresses, and improves toughness.",
  },
  {
    id: 159,
    section: "Mechanical",
    question:
      "Which non-destructive testing method is most suitable for detecting fine surface cracks in a non-porous non-magnetic component?",
    options: [
      "Liquid penetrant testing",
      "Magnetic particle testing",
      "Tensile testing",
      "Impact testing",
    ],
    correctAnswer: "Liquid penetrant testing",
    explanation:
      "Liquid penetrant testing detects surface-breaking discontinuities in non-porous materials and does not require the component to be ferromagnetic.",
  },
  {
    id: 160,
    section: "Mechanical",
    question:
      "A spring-mass system has stiffness k = 800 N/m and mass m = 2 kg. Its undamped natural circular frequency is:",
    options: ["10 rad/s", "20 rad/s", "40 rad/s", "400 rad/s"],
    correctAnswer: "20 rad/s",
    explanation:
      "Natural circular frequency ωn = √(k/m) = √(800/2) = √400 = 20 rad/s.",
  },
  {
    id: 161,
    section: "Mechanical",
    question:
      "Resonance in a lightly damped single-degree-of-freedom system occurs approximately when:",
    options: [
      "Excitation frequency is zero",
      "Excitation frequency equals the natural frequency",
      "Excitation frequency is twice the natural frequency in every case",
      "Damping ratio equals unity",
    ],
    correctAnswer: "Excitation frequency equals the natural frequency",
    explanation:
      "For light damping, the maximum steady-state vibration response occurs near the natural frequency.",
  },
  {
    id: 162,
    section: "Mechanical",
    question:
      "A simply supported beam carries a uniformly distributed load of 10 kN/m over its entire span of 6 m. The vertical reaction at each support is:",
    options: ["20 kN", "30 kN", "40 kN", "60 kN"],
    correctAnswer: "30 kN",
    explanation:
      "Total load = 10×6 = 60 kN. By symmetry, each support reaction = 60/2 = 30 kN.",
  },
  {
    id: 163,
    section: "Mechanical",
    question:
      "A force of 100 N acts perpendicular to a lever arm at a distance of 0.5 m from the pivot. The moment about the pivot is:",
    options: ["25 N·m", "50 N·m", "100 N·m", "200 N·m"],
    correctAnswer: "50 N·m",
    explanation:
      "Moment = Force × perpendicular distance = 100×0.5 = 50 N·m.",
  },
  {
    id: 164,
    section: "Mechanical",
    question:
      "If two statistically independent components connected in series have reliabilities 0.90 and 0.80, the system reliability is:",
    options: ["0.70", "0.72", "0.85", "0.90"],
    correctAnswer: "0.72",
    explanation:
      "For independent components in series, system reliability is the product: R = 0.90×0.80 = 0.72.",
  },
  {
    id: 165,
    section: "Mechanical",
    question:
      "The primary objective of preventive maintenance is to:",
    options: [
      "Run equipment until complete failure",
      "Reduce the probability of unexpected breakdowns",
      "Eliminate all maintenance costs",
      "Increase equipment downtime",
    ],
    correctAnswer: "Reduce the probability of unexpected breakdowns",
    explanation:
      "Preventive maintenance uses planned inspection and servicing to reduce failure probability and unplanned downtime.",
  },
  // ========== MECHANICAL DOMAIN: Q166-Q170 ==========

  {
    id: 166,
    section: "Mechanical",
    question:
      "A thin cylindrical pressure vessel of internal diameter 1000 mm and wall thickness 10 mm is subjected to an internal pressure of 2 MPa. The hoop stress is:",
    options: ["50 MPa", "100 MPa", "150 MPa", "200 MPa"],
    correctAnswer: "100 MPa",
    explanation:
      "For a thin cylindrical vessel, hoop stress σh = pd/(2t) = 2×1000/(2×10) = 100 MPa.",
  },
  {
    id: 167,
    section: "Mechanical",
    question:
      "For a journal bearing operating under hydrodynamic lubrication, the load is primarily supported by:",
    options: [
      "Direct metal-to-metal contact",
      "Pressure developed in the converging lubricant film",
      "External spring force",
      "Surface tension of lubricant only",
    ],
    correctAnswer: "Pressure developed in the converging lubricant film",
    explanation:
      "Relative motion and the converging wedge geometry generate hydrodynamic pressure in the lubricant film, which supports the bearing load.",
  },
  {
    id: 168,
    section: "Mechanical",
    question:
      "A centrifugal pump runs at 1000 rpm and develops a head of 20 m. If its speed is increased to 1200 rpm while operating under dynamically similar conditions, the new head is approximately:",
    options: ["24.0 m", "26.4 m", "28.8 m", "32.0 m"],
    correctAnswer: "28.8 m",
    explanation:
      "From pump affinity laws, H is proportional to N². Therefore H2 = 20×(1200/1000)² = 20×1.44 = 28.8 m.",
  },
  {
    id: 169,
    section: "Mechanical",
    question:
      "For an ideal regenerative Rankine cycle, feedwater heating primarily improves thermal efficiency by:",
    options: [
      "Reducing the average temperature of heat addition",
      "Increasing the average temperature of heat addition",
      "Increasing condenser pressure",
      "Eliminating turbine expansion",
    ],
    correctAnswer: "Increasing the average temperature of heat addition",
    explanation:
      "Regeneration preheats feedwater using extracted steam, thereby increasing the mean temperature at which external heat is supplied and improving cycle efficiency.",
  },
  {
    id: 170,
    section: "Mechanical",
    question:
      "A component is subjected to principal stresses of 120 MPa, 40 MPa and 0 MPa. According to the maximum shear stress theory, the maximum shear stress is:",
    options: ["40 MPa", "60 MPa", "80 MPa", "120 MPa"],
    correctAnswer: "60 MPa",
    explanation:
      "The absolute maximum shear stress is half the difference between maximum and minimum principal stresses: τmax = (120−0)/2 = 60 MPa.",
  },
];

