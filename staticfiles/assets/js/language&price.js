document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openCurrencyMenu');
    const closeBtn = document.getElementById('closeMenu');
    const menu = document.getElementById('currencyMenu');
    const menuItems = document.querySelectorAll('.menu-item');
    const currentCurrencyEl = document.getElementById('currentCurrency');
    const currentFlag = document.getElementById('currentFlag');
    const priceEls = document.querySelectorAll('.menu__preci');
    const languageSelector = document.getElementById('language-selector');

    const lang = {
        ar: {
            homenav: "الرئيسية",
            aboutnav: "من نحن",
            transvnav: "قصص التحول",
            testimonialvnav: "آراء العملاء",
            packagevnav: "الباقات",
            clacvnav: "حاسبة السعرات",

            homeh1: "حوّل حياتك، خطوة بخطوة",
            homep: "حوّل لياقتك مع تدريب مخصص لك. ابني قوتك، خسر وزنك، وحسّن صحتك. لنبدأ الرحلة!",
            homebutton1: "ابدأ رحلتك",
            homebutton2: "استكشف الخطط",

            brandh2: "خبرة معتمدة يمكنك الوثوق بها",

            abouth2home1: "تعرف علينا أكثر",
            aboutphome1: "مرحبًا، أنا عمر المهدي، مدرب لياقة بدنية وتغذية عبر الإنترنت بخبرة تزيد عن ٤ سنوات. ساعدت أكثر من ١٠٠٠ امرأة في تغيير حياتهن من خلال خطط تدريب وتغذية مخصصة. سواءً كنتِ ترغبين في بناء القوة أو خسارة الوزن أو تحسين صحتك العامة، أنا هنا لدعمك في كل خطوة.",
            aboutbuutton: "اعرف المزيد",

            transformationh2: "نتائجك هي شغفي",
            transformationh31: "زيادة الكتلة العضلية",
            transformationh32: "إعادة تشكيل الجسم",
            transformationseebutton1: "عرض المزيد",
            transformationseebutton2: "عرض المزيد",
            transformationseebutton3: "عرض المزيد",
            transformationseebutton4: "عرض المزيد",
            transformationseebutton5: "عرض المزيد",
            transformationseebutton6: "عرض المزيد",
            transformationseebutton7: "عرض المزيد",
            transformationseebutton8: "عرض المزيد",
            transformationseebutton9: "عرض المزيد",
            transformationseebutton10: "عرض المزيد",
            transformationseebutton11: "عرض المزيد",
            transformationseebutton12: "عرض المزيد",
            transformationh33: "زيادة الكتلة العضلية",
            transformationh34: "زيادة الكتلة العضلية",
            transformationh35: "زيادة الكتلة العضلية",
            transformationh36: "إعادة تشكيل الجسم",
            transformationh37: "زيادة الكتلة العضلية",
            transformationh38: "إعادة تشكيل الجسم",
            transformationh39: "زيادة الكتلة العضلية",
            transformationh310: "إعادة تشكيل الجسم",
            transformationh311: "زيادة الكتلة العضلية",
            transformationh312: "زيادة الكتلة العضلية",
            transformationh313: "إعادة تشكيل الجسم",





            menuh2: "ملفات بدون متابعة",
            menuh31: "الباقة ١",
            menuhspan1: "الباقة الذهبية",
            menuh32: "الباقة ٢",
            menuhspan2: "الباقة الفضية",
            menuh33: "الباقة ٣",
            menuhspan3: "الباقة البرونزية",
            menuh34: "الباقة ٤",
            menuhspan4: "الباقة البرونزية",

            bookh2: "الكتب المميزة من المدرب",
            bookh31: "كتاب الوصفات الصحية",
            bookp1: "إذا كنتِ امرأة تحاولين ضبط نظامك الغذائي، سواء لإنقاص الوزن، الحفاظ عليه، أو بناء عضلات قوية، فهذا الكتاب مُعد خصيصًا لكِ. يعتقد الكثيرون أن الطعام الصحي خالي من الطعم ويعني الحرمان، لكن الحقيقة أنكِ يمكنكِ الاستمتاع بوجبات لذيذة ومتوازنة في نفس الوقت.",
            bookbutton1: "📥 اشترِ الآن",
            ov: "أكثر من 90 وصفة سهلة التحضير",
            ov2: "وجبات غداء وعشاء غنية بالبروتين والألياف",
            ov3: "وجبات منخفضة السعرات لعشاق الرياضة",
            ov4: "وجبات خفيفة وفطور صحي بدون سعرات إضافية",
            ov5: "حلويات بدون شعور بالذنب",
            ov6: "سموذي غني بالبروتين للتعافي بعد التمرين",
            bookh32: "كتاب دليل السعرات الحرارية",
            bookp2: "كتاب 'دليل السعرات الحرارية' هو دليلك البسيط لتتبع السعرات بدون تعقيد. يتضمن أكثر من 500 نوع طعام، مصنفين ويعرضون السعرات الحرارية، البروتين، الدهون، والكربوهيدرات لكل 100 جرام.",
            ov7: "تفصيل دقيق للسعرات الحرارية، البروتين، الدهون والكربوهيدرات لكل نوع طعام",
            ov8: "مثالي للأمهات اللواتي يطبخن وجبات صحية لعائلاتهن",
            ov9: "مناسب لأي شخص يتتبع تغذيته، بما في ذلك الرياضيين",
            ov10: "مفيد لفقدان الوزن، بناء العضلات أو الحفاظ على نمط حياة صحي",
            nurationp1: "اكتشف ",
            nurationp2: "احتياجاتك من السعرات",
            nurationp3: "احسب احتياجاتك اليومية من السعرات بكل سهولة مع حاسبتنا الخاصة. فقط أدخل عمرك، وزنك وطولك وابدأ الآن. هذه الأداة مقدمة هدية من الكابتن وسيم لدعمك في تحقيق أهدافك الغذائية.",
            nurationp11: "اكتشف عدد السعرات التي تحتاجها يوميًا.",
            nurationp12: "أدخل عمرك ووزنك وطولك.",
            nurationp13: "نتائج مخصصة لهدفك.",
            bookbutton: "ابدأ الآن",


            testimonialtitle: "الشهادة",
            testimonial1: "نور",
            testimonial2: "مرحبًا عمر، كيف حالك؟ بصراحة، كل شيء يسير على ما يرام. خطة الوجبات وروتين التمرين مذهلان. لا أصدق أنني فقدت 10 كجم من الدهون دون أن أشعر بحرمان من أي شيء! نظامي الغذائي وجسمي تغيروا تمامًا، والفارق واضح جدًا في الصور. كان شرفًا لي أن أعمل معك في هذه الفترة. لديك ذوق رائع، وأنت محترم جدًا، ولا تتردد أبدًا في تقديم أي معلومة. ما شاء الله، أنت تفهم كل شيء وماهر للغاية. عقليتي عن الطعام والرجيم تغيرت تمامًا. الآن، آكل بشكل جيد وصحيح وأفهم بالضبط ما الذي يدخل في جسمي. أحسب كل شيء، ولم أعد أضغط على نفسي بشأن ما إذا كان تناول شيء ما سيجعلني أكتسب وزنًا أو يدمر نظامي الغذائي. قبل ذلك، كنت أستعيد الوزن الذي فقدته لأنني لم أفهم الأمور بشكل صحيح. الآن، أصبحت التمارين جزءًا أساسيًا من روتيني اليومي، ولا أستطيع أن أتخيل حياتي بدونها. بصراحة، كل شيء عنك رائع. بارك الله فيك! شكرًا لك على كل شيء وعلى كل الجهد الذي بذلته معي. أنا ممتن جدًا.",
            testimonial3: "نوران مرزوق",
            testimonial4: "مدرب، لو كنت تعرف فقط كم غيرت الأمور التي كنت أعتقد أنها مستحيلة! عندما كنت أسمع الناس يتحدثون عن نمط حياة صحي، كنت أتخيل أنه شيء صعب للغاية ويحتاج إلى قوة وإرادة هائلة - شيء لم أكن أعتقد أنني أملكه. لكنك جعلته بسيطًا بالنسبة لي. حتى في الأيام التي كنت أواجه فيها صعوبة في الالتزام، كنت تجعل الأمر يبدو قابلاً للتحقيق وليس شيئًا ضخمًا. شكرًا جزيلاً! في البداية، كنت أريد فقط أن أرى إلى أي مدى يمكنني تقليل نسبة الدهون في جسمي. لكن بصراحة، كنت قد فقدت الأمل تمامًا في فقدان الوزن بسبب جميع المشاكل الصحية التي كنت أعاني منها. عندما زرت طبيبة أمراض النساء، نصحتني بمراجعة جراح لإجراء عملية تكميم معدة. وعندما ذهبت إلى الجراح، رفضني! 🤣🤣 حتى فكرت في إجراءات أخرى مثل البالون أو الكبسولة الذكية، معتقدة أن هذه هي الخيارات الوحيدة أمامي. لكن الآن، أنا ممتنة جدًا! لقد فقدت 15 كجم بالفعل، وهدفي هو الوصول إلى 25 كجم. بفضل الله، أنا في صحة رائعة، وأشعر بشعور مذهل، ولا أزال أحرز تقدمًا. بارك الله فيك على كل جهودك - أنت دائمًا تدعمني! ❤️❤️❤️🌹🌹🌹",
            testimonial5: "مريم أحمد",
            testimonial6: "مدرب، أقسم بالله، في بضعة أسابيع فقط، تحولت جسمي بشكل كامل - 180 درجة! لا أستطيع حتى أن أصف مدى سعادتي بالنتائج! معدتي وخصري أصبحا مختلفين تمامًا - لا يصدق! جسمي تغير كثيرًا لدرجة أنني وصلت إلى مستوى لم أكن أعتقد أنه ممكن. اليوم في صالة الألعاب الرياضية، كان الجميع يعلقون على تقدمي، ويسألونني كيف حققت هذه التحول. عندما يفهم شخص ما عقلك، ويحفزك، ويرشدك بشكل صحيح، تدرك أن العملية أسهل وأسرع بكثير مما كنت تتخيل - خاصة عندما يكون هذا الشخص رائعًا مثلك. شكرًا جزيلاً، حقًا! كل كلمة أو نصيحة قدمتها لي، أخذتها إلى القلب وطبقتها تمامًا كما قلت. وبصراحة، هذا هو ما أحدث الفرق لي - كان الأمر كله يتعلق بالعقلية واتباع ما علمتني إياه!",
            testimonial7: "تاليا يوسف",
            testimonial8: "لقد كانت التحولات مذهلة! شكل جسمي تغير كثيرًا، رغم أنني لم أكن ملتزمة تمامًا بالتدريب والحمية. إذا كنت أكثر انضباطًا، كانت النتائج ستكون أفضل بكثير! كما تحسن بشرتي بشكل كبير - شيء لم أتوقعه على الإطلاق! في البداية، كانت جدولة التمرين مرهقة لي 😂، ولكن فيما بعد، بدأت أستمتع بها. التدريب منظم بشكل جيد ويحدث فرقًا كبيرًا. أما بالنسبة للطعام، كنت مندهشة من أنه يمكنني تناول ما أحب دون الحاجة إلى خطة حمية معقدة. فهمت أنه يمكنني الاستمتاع بوجباتي، مما جعل الرحلة بأكملها أسهل وأكثر راحة بالنسبة لي. بصراحة، كان كل شيء رائعًا! المشكلة الوحيدة كانت فرق التوقيت، مما أدى أحيانًا إلى تأخير الردود، ولكن لا بأس في ذلك. والأهم من ذلك، أنك محترف، محترم، ومخلص حقًا في مساعدة الناس. أنت لا تبخل بأي معلومة قيمة، وهذا هو السبب الذي جعلني أقرر الاشتراك معك. ❤️🙏🏻🙏🏻",
            testimonial9: "جانا سامي",
            testimonial10: "بصراحة، هذا ليس مجرد رد فعل لإعطاء الملاحظات - أنا أقصد كل كلمة. أنت شخص مميز وناجح، وأتمنى لك المزيد من النجاح. لقد تغيرت كثيرًا، والآن أشعر بمستوى من الثقة لم أكن أملكه من قبل - وكل ذلك بفضل الله ثم بفضل ما تعلمته منك. لم أكن أعرف كيف أتناول الطعام بشكل صحيح، لكن الآن تعلمت كيف آكل جيدًا دون حرمان. لا أستطيع حتى أن أشرح بالضبط ما فعلته، ولكنني سعيد للغاية بالنتائج وأواصل رحلتي بفضلك. مهنيتك مذهلة - في أي مرة طرحت فيها سؤالًا، كان لديك دائمًا الإجابة الصحيحة. رغم جدولي المزدحم وجميع التحديات، حققت نتائج مذهلة، وأنا حقًا سعيد بذلك. كنت متحمسة جدًا لمشاركة صور تقدمي، وأتمنى لك كل النجاح لأنك حقًا تستحقه. ❤️",



            footersocial: "روابط التواصل",
            footerpayment: "طرق الدفع",
            footersuscrinbe: "اشترك للحصول على خصومات",
            footersubscribe2: "اشترك",
            visith2: "انضمي إلى التدريب الأونلاين الخاص بنا",
            visitp: " إذا كنتِ تبحثين عن تدريب أونلاين بمتابعة شخصية، فقط أرسلي رسالة على الرقم أدناه وابدئي رحلتك الرياضية مع الكابتن عمر اليوم!",
            visitbutton: "تواصلي معنا على واتساب",


            packagedesc1: "برنامج جيم مركز لمدة 12 أسبوعًا لرفع وتشكيل الأرداف، وشد الأفخاذ والذراعين، وبناء قوة الجسم.",
            packagedesc3: "✔ يشمل دليل السعرات والوصفات",
            packagedesc4: "✔ فيديوهات توضيحية لتفصيل العضلات",
            packagedesc5: "✔ يركز على المرونة والحركة",
            packagedesc6: "مثالي للنساء الراغبات في تحسين الشكل، والقوة، وتوازن الجسم.",
            workoutsPerWeek: "✔ {num} تمارين جيم في الأسبوع"
        },
        en: {
            homenav: "HOME",
            aboutnav: "ABOUT ",
            transvnav: "TRANSFORMATION",
            testimonialvnav: "TESTIMONIAL",
            packagevnav: "PACKAGE",
            clacvnav: "CALCULATOR",
            navtrans: "",
            navcalc: "",

            homeh1: "Transform Your Life, One Step at a Time",
            homep: "Transform your fitness with personalized coaching. Build strength, lose weight, and improve health. Let’s get started!",
            homebutton1: "Start Your Journey",
            homebutton2: "Explore Plans",

            brandh2: "Certified Expertise You Can Trust",

            abouth2home1: "Learn More About Us",
            aboutphome1: "Hi, I’m Omar El-Mahdy, an online fitness coach and nutrition specialist with over 4 years of experience. I’ve helped more than 1,000 women transform their lives through personalized training and nutrition plans. Whether you’re looking to build strength,lose weight,or improve your overall health,I’ m here to guide you every step of the way.",
            aboutbuutton: "Know More",

            transformationh2: "Your results my passion",
            transformationh31: "Bulking",
            transformationh32: "Body recomposition",
            transformationseebutton1: "See More",
            transformationseebutton2: "See More",
            transformationseebutton3: "See More",
            transformationseebutton4: "See More",
            transformationseebutton5: "See More",
            transformationseebutton6: "See More",
            transformationseebutton7: "See More",
            transformationseebutton8: "See More",
            transformationseebutton9: "See More",
            transformationseebutton10: "See More",
            transformationseebutton11: "See More",
            transformationseebutton12: "See More",
            transformationh33: "Bulking",
            transformationh34: "Bulking",
            transformationh35: "Bulking",
            transformationh36: "Body recomposition",
            transformationh37: "Bulking",
            transformationh38: "Body recomposition",
            transformationh39: "Bulking",
            transformationh310: "Body recomposition",
            transformationh311: "Bulking",
            transformationh312: "Bulking",
            transformationh313: "Body recomposition",

            menuh2: "Files without tracking",
            menuh31: "package1",
            menuhspan1: "gold package",
            menuh32: "package",
            menuhspan2: "silver package",
            menuh33: "package3",
            menuhspan3: "bronze package",
            menuh34: "package4",
            menuhspan4: "bronze package",

            bookh2: "Featured Books from the Coach",
            bookh31: "Healthy Recipes Book",
            bookp1: "  If you are a woman trying to get your diet right, whether to lose weight, maintain it, or build strong muscles, this book is made just for you. Many people think healthy food is tasteless and involves deprivation. But the truth is, you can enjoy delicious, flavorful meals while keeping them balanced and nourishing.",
            bookbutton1: "📥 Buy Now",
            ov: "Over 90 easy-to-follow recipes",
            ov2: "High-protein and fiber-rich lunch and dinner options",
            ov3: "Low-calorie meals for fitness enthusiasts",
            ov4: "Healthy snacks and breakfasts with no extra calories",
            ov5: "Guilt-free desserts",
            ov6: "Protein-packed smoothies for post-workout recovery",
            bookh32: "Calories Guide Book",
            bookp2: "The 'Calorie Index Book' is your simple guide to track your calories without any complication. It includes over 500 food items, categorized and showing calories, protein, fat, and carbs per 100 grams.",
            ov7: "Detailed breakdown of calories, protein, fat, and carbs for each food item",
            ov8: "Ideal for moms cooking healthy meals for their families",
            ov9: "Perfect for anyone tracking their nutrition, including athletes",
            ov10: "Helpful for weight loss, muscle gain, or maintaining a healthy lifestyle",
            nurationp1: "DISCOVER YOUR ",
            nurationp2: "CALORIE NEEDS",
            nurationp3: "Discover your daily calorie needs effortlessly with our exclusive calculator. Simply enter your age, weight, and height to get started. This tool is a gift from Coach Wasim to help you stay on track with your nutrition goals.",
            nurationp11: "Find out how many calories you need daily.",
            nurationp12: "Enter your age, weight, and height.",
            nurationp13: "Personalized results for your goals.",
            bookbutton: "Get Start",

            testimonialtitle: "Testimonial",
            testimonial1: " Nour",
            testimonial2: "Hey Omar, how are you? Honestly, everything is going great. The meal plan and workout routine are amazing. I can't believe I lost 10 kg of fat without feeling deprived of anything! My diet and physique have completely changed, and the difference is clearly visible in the pictures. It was truly an honor working with you during this period. You have great taste, you're very respectful, and you never hesitate to provide any information. Mashallah, you understand everything and are really skilled. My mindset about food and dieting has completely changed. Now, I eat well and properly while understanding exactly what goes into my body. I calculate everything, and I no longer stress about whether eating something will make me gain weight or ruin my diet. Before, I used to regain the weight I lost because I didn't understand things properly. Now, exercise has become an essential part of my daily routine, and I can't imagine my life without it. Honestly, everything about you is amazing. May God bless you! Thank you for everything and for all the effort you put in with me. I truly appreciate it      ",
            testimonial3: "Noran Marwan",
            testimonial4: "   Coach, if you only knew how much you've changed things I once thought were impossible! Whenever I heard people talk about a healthy lifestyle, I used to imagine it as something extremely difficult that required immense strength and determination—something I never thought I had. But you truly made it simple for me. Even on days when I struggled to stay committed, you always made it feel manageable and not like a big deal. Thank you so much! 🌹 At first, I just wanted to see how far I could go in reducing my body fat percentage. But honestly, I had completely lost hope in losing weight due to all the health issues I was dealing with. When I once visited a gynecologist, she advised me to see a surgeon and undergo a gastric sleeve surgery. And when I went to the surgeon, he actually turned me away! 🤣🤣 I even considered other procedures like the balloon or smart capsule, thinking they were my only options. But now, I'm so grateful! I've already lost 15 kg, and my goal is to reach 25 kg. Thanks to God, I'm in great health, feeling amazing, and still progressing. May God bless you for all your efforts—you never fail to support me! ❤️❤️❤️🌹🌹🌹",
            testimonial5: "Mariam Ahmed",
            testimonial6: "Coach, I swear, in just a few weeks, my body has completely transformed—180 degrees! I can't even describe how happy I am with the results! My stomach and waist look completely different—it's unbelievable! My body has changed so much that I've reached a level I never thought possible. Today at the gym, everyone was commenting on my progress, asking me how I managed to achieve this transformation. When someone truly gets inside your head, motivates you, and guides you properly, you realize the process is actually much easier and faster than you ever imagined—especially when that person is as incredible as you. Thank you so much, truly! Every single word or piece of advice you gave me, I took to heart and applied exactly as you said. And honestly, that's what made all the difference for me—it was all about mindset and following what you taught me!",
            // bookh2: "Coach, I swear, in just a few weeks, my body has completely transformed—180 degrees! I can't even describe how happy I am with the results! My stomach and waist look completely different—it's unbelievable! My body has changed so much that I've reached a level I never thought possible.Today at the gym,everyone was commenting on my progress,asking me how I managed to achieve this transformation.When someone truly gets inside your head, motivates you, and guides you properly, you realize the process is actually much easier and faster than you ever imagined— especially when that person is as incredible as you.Thank you so much, truly!Every single word or piece of advice you gave me, I took to heart and applied exactly as you said.And honestly, that 's what made all the difference for me—it was all about mindset and following what you taught me!",
            testimonial7: "Talia Youssef",
            testimonial8: " The transformation has been incredible! My body shape has changed so much, even though I wasn't fully committed to training and diet. If I had been more disciplined, the results would have been even better! My skin has also improved significantly—something I didn't expect at all! At first, the workout schedule overwhelmed me 😂, but later, I actually started enjoying it. The training is well-structured and makes a huge difference. As for food, I was amazed that I could still eat what I love without a complicated diet plan. Understanding that I can enjoy my meals made the whole journey much easier and more comfortable for me. Honestly, everything has been great! The only issue was the time difference, which sometimes delayed responses, but that's totally fine. Most importantly, you're professional, respectful, and genuinely dedicated to helping people. You never hold back any valuable information, and that's exactly why I decided to sign up with you. ❤️🙏🏻🙏🏻",
            testimonial9: "Jana Sami",
            testimonial10: "Honestly, this isn't just feedback for the sake of giving feedback—I truly mean every word. You are an outstanding and successful person, and I genuinely wish you more success. I have changed so much, and I now feel a level of confidence I never had before—all because of you and what I've learned from you. I never knew how to eat properly, but now I've learned how to eat well without depriving myself. I can't even explain exactly what you did, but I'm extremely happy with the results and continuing my journey because of you. Your professionalism is incredible—any time I asked you something, you always had the right answer. Despite my busy schedule and all the challenges, I still achieved amazing results, and I'm truly happy about it. I was so eager to share my progress photos, and I wish you all the success because you truly deserve it. ❤️ ",

            footersocial: "Social",
            footerpayment: "Payment Method",
            footersuscrinbe: "Subscribe For Discounts",
            footersubscribe2: "Subscribe",
            bookbutton2: "📥 Buy Now",
            visith2: "Join Our Online Coaching",
            visitp: " If you're a girl looking to train online with personalized coaching, just send a message to the number below and start your fitness journey with Coach Omar today!",
            visitbutton: "Contact Us on WhatsApp",



            packagedesc1: "A focused 12-week gym program designed to lift and shape your glutes, tone inner thighs and arms, and build core strength.",
            packagedesc3: "✔ Includes calorie & recipe guides",
            packagedesc4: "✔ Video demos with muscle breakdowns",
            packagedesc5: "✔ Flexibility & mobility focused",
            packagedesc6: "Perfect for women looking to improve shape, strength, and body balance.",
            workoutsPerWeek: "✔ {num} gym workouts per week"




        }
    };

    const basePrices = {
        USD: {
            package1: 55,
            package2: 97,
            package3: 39,
            package4: 398,
        },
        EGP: {
            package1: 1700,
            package2: 3000,
            package3: 1200,
            package4: 120005,
        },
        SAR: {
            package1: 206,
            package2: 365,
            package3: 146,
            package4: 1495,
        },
        AED: {
            package1: 202,
            package2: 358,
            package3: 142,
            package4: 1450,
        }
    };

    const flagMap = {
        EGP: 'eg.png',
        SAR: 'saudi.webp',
        AED: 'unitearab.webp',
        USD: 'usd.webp'
    };

    function getCurrencyForCountry(countryCode) {
        if (countryCode === 'EG') return 'EGP';
        if (countryCode === 'SA') return 'SAR';
        if (countryCode === 'AE') return 'AED';
        return 'USD';
    }

    function setCurrency(currency) {
        currentCurrencyEl.textContent = currency;
        currentFlag.innerHTML = `<img src="/static/assets/img/${flagMap[currency]}" width="20">`;

        priceEls.forEach((el, index) => {
            const packageName = `package${index + 1}`;
            const price = basePrices[currency][packageName];
            el.textContent = `${price} ${currency}`;
        });
    }

    function changeLanguage(language) {
        Object.keys(lang[language]).forEach(key => {
            const element = document.querySelector(`[data-lang="${key}"]`);
            if (element) {
                element.textContent = lang[language][key];
            }
        });

        if (language === 'ar') {
            document.documentElement.lang = 'ar';
            document.body.classList.add('arabic');
            document.body.style.direction = 'rtl';
            document.body.style.textAlign = 'right';
        } else {
            document.documentElement.lang = 'en';
            document.body.classList.remove('arabic');
            document.body.style.direction = 'ltr';
            document.body.style.textAlign = 'left';
        }

        const swiperSections = document.querySelectorAll('.card__content, .testimonial__swiper');
        swiperSections.forEach(section => {
            section.style.direction = 'ltr';
            section.style.textAlign = 'left';
        });

        // ✅ تحديث السطر اللي فيه عدد التمارين


    }

    fetch('/location/')
        .then(res => res.json())
        .then(data => {
            const userCountry = data.country || 'US';
            const currency = getCurrencyForCountry(userCountry);
            setCurrency(currency);
        })
        .catch(() => {
            setCurrency('USD');
        });

    openBtn.addEventListener('click', () => {
        menu.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('show');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const currency = item.getAttribute('data-currency');
            const language = item.getAttribute('data-lang');
            setCurrency(currency);
            changeLanguage(language);
            menu.classList.remove('show');
        });
    });

    languageSelector.addEventListener('change', (event) => {
        const language = event.target.value;
        changeLanguage(language);
    });

    setCurrency('USD');
});