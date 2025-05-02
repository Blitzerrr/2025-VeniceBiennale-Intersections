const tags = [
    {
        tagName: "Adapt",
        subTags: ["heart", "brain", "body"],
        color: "#7c5d2e", // Red
    },
    {
        tagName: "Resist",
        subTags: ["pollution", "microbes", "toxins"],
        color: "#103e19", // Orange
    },
    {
        tagName: "Sustain",
        subTags: ["walls", "windows", "doors"],
        color: "#3982ad", // Yellow
    },
    {
        tagName: "Innovate",
        subTags: ["cars", "bikes", "trucks"],
        color: "#494168", // Green
    },
    {
        tagName: "Access",
        subTags: ["Invention", "Creativity", "Technology"],
        color: "#4d2f39", // Blue
    },
];

const items = [
    {
        projectTitle: "Solar Decathalon",
        projectDescription: "The U.S. Department of Energy Solar Decathlon® is a collegiate competition that has inspired thousands of students worldwide to enter the clean energy workforce since its inception in 2002. Today, the 10 contests that are the foundation of Solar Decathlon challenge students to design and build high-performance, low-carbon buildings that mitigate climate change and improve our quality of life through greater affordability, resilience, and energy efficiency. The winners are those teams that best blend architectural and engineering excellence with innovation.",
        creatorName: "Kihong Ku",
        color: "#ffffff",
        categoryTags: ["Resist", "Innovate"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Park in a Truck",
        projectDescription: "Park in a Truck (PiaT) is an innovative green-space development initiative that enables communities to transform underutilized land into accessible, cost-effective, and community-driven parks. The initiative has expanded to include the Park Ambassador (PA) program, a paid internship that empowers youth to drive positive change in their neighborhoods through educational programming, event planning, and park maintenance. This program enhances participants’ educational and career pathways while fostering civic engagement. Our research, Power Tools, examines the social, mental health, and community impacts of the PiaT process, focusing on self-esteem and the reduction of negative stereotyping among Black urban youth (grades 6–8). While studies highlight the benefits of urban green spaces on mental and physical health (Frumkin et al., 2017; Kondo et al., 2018), limited research explores these effects on young people (Vanaken & Danckaerts, 2018). Green spaces have been shown to mitigate environmental and psychosocial stressors in children (Franklin et al., 2020), yet underserved communities often face interventions imposed upon them rather than developed with their input. Our research shows the positive impact of the PA program, and how community-led park development can influence their neighborhoods. This strengths-based approach underscores the need for youth-driven programs that promote psychosocial adjustment and positive development (Larson, 2000; Lerner et al., 2005; Porter, 2010).",
        creatorName: "Kim Douglas",
        color: "#ffffff",
        categoryTags: ["Adapt", "Sustain"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "The NuroSleeve Upper Extremity Assistive System",
        projectDescription: "The NuroSleeve is a wearable medical device that restores hand movement in people with paralysis. It allows for patient-controlled stimulation and motorized assistance to open and close the hand, and use the arm, allowing functional use of the upper extremity. Restores upper extremity motor function in children and adults with paralysis. Through rounds of iterative testing, the NuroSleeve has been designed with direct patient feedback— resulting in a device created to match patient needs, desires, and expectations. The NuroSleeve features: (a) streamlined device design and creation; (b) fully customizable from size/shape to implementation and use; (c) provide patients with an enhanced level of independence including donning, use, and doffing; and (d), ability for medical team to monitor use and benefit.",
        creatorName: "Mijail Serruya",
        color: "#ffffff",
        categoryTags: ["Innovate", "Access"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Investigating Novel Dye Sources to Reduce Synthetic Toxic Effluents for Improved Human and Environmental Health",
        projectDescription: "Natural dyes account for 1% of the textile industry, with seed, root, bark, leaf, flower, and fruit of over 500 plant species used. They are often non-allergenic, non-toxic, eco-friendly, antimicrobial, and biodegradable. Eighty percent of emissions from the textile industry contain heavy metals and neurotoxins that bioaccumulate in fish consumed by people. In particular, synthetic red and pink dyes are carcinogenic and mutagenic. Barberry (Berberis thunbergii) and wineberry (Rubus phoenicolasius) are two invasive plant species that produce a wide range of enticing pink to red colors on organic, heavyweight cotton and wool, which can be used for high-durability upholstery fabrics. Colorants extracted from invasive plant parts are also novel because when harvested they improve ecosystem function. By incentivizing the removal of invasive species via broad commercial use and replacing them with native species, biodiversity richness is increased. Most significantly, textiles colored with natural dyes are estimated to earn $5.9 billion by 2025. Our preliminary dye research yielded a range of hues, including pink, orange, beige, and blue/gray. These nontoxic natural dyes met industry test standards for their use in the residential interior textile market. In urban settings, reducing the use of synthetic dyes limits exposure and improves environmental and human health.",
        creatorName: "Becky Flax",
        color: "#ffffff",
        categoryTags: ["Innovate", "Sustain"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Sensory Seating Project",
        projectDescription: "Neurodivergent patients like those with autism and intellectual disabilities can struggle with the built environment due to sensory issues, making medical waiting rooms (and therefore medical care) difficult to access. In 2021, Dr. Wendy Ross from the Jefferson Health Center for Autism and Neurodiversity reached out to Prof. Rob Melville in the Thomas Jefferson University Dept. of Industrial Design to collaboratively create a seating option that would help facilitate a more neurodivergent friendly experience. Prof. Melville designed the seating with a group of industrial design students and enlisted MillerKnoll as the manufacturer with input from the team at the Center for Autism and Neurodiversity, Jefferson Occupational Therapy, and community stakeholders impacted by autism and intellectual disabilities. Over the course of three years, the team piloted multiple iterations of the seating. Participants were both verbal and non-speaking. Feedback from non-speaking individuals was taken by videotaping and coding their behaviors to assess comfort. A critical issue for the seating was that the materials and design could be easily sanitized. The final chair had adaptations such as a sensory screen to help block out noise and movement, as well as sensory friendly textured seating and armrests. Jefferson Health invested in the seats for their new specialty care pavilion in Philadelphia; follow-up studies are planned. The seating was recognized in the general excellence category of the Innovation by Design Awards-2024, from Fast Company.",
        creatorName: "Rob Melville",
        color: "#ffffff",
        categoryTags: ["Adapt", "Access"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "URBANO.IO",
        projectDescription: "URBANO.IO delivers location and mobility insights, empowering architects and planners to create better cities. It streamlines model building, data collection, and simulation, enabling the evaluation of mobility performance across design scenarios. By combining data and simulation, URBANO.IO enhances early-stage design optimization, providing quantitative insights for smarter decision-making. This case study focuses on the redevelopment of the North Philadelphia waterfront, an area currently separated from the city by an elevated expressway. The City of Philadelphia aims to revitalize the site into a vibrant destination, using data-driven mobility assessments to guide investments and explore new mobility solutions, such as microtransit. A parametric model in Rhino & Grasshopper generates different master plan options. URBANO.IO evaluates each design based on mobility and accessibility metrics, providing insights into walkability, transit access, and network integration. Using multi-objective analysis tools like Pareto Front and Parallel Coordinates Plot, the project identifies optimal solutions for an accessible, connected waterfront.",
        creatorName: "Yang Yang",
        color: "#ffffff",
        categoryTags: ["Resist", "Sustain"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Glass Bridge",
        projectDescription: "At over 10 meters long and composed of 144 hollow glass units engineered for both efficiency and strength, Glass Bridge envisions a more sustainable future. The project challenges conventional design by demonstrating how meticulously crafted construction materials can serve as primary structural systems while minimizing material usage and maximizing performance and recyclability. Although glass is not traditionally seen as a sustainable material, the bridge’s hollow, lightweight units, made from recycled glass, require significantly less energy to manufacture and transport compared to their concrete and steel counterparts. The design showcases how internal force flows are contained within a 1.6 cm cross-section, creating an ultra-transparent yet structurally robust architectural solution. By reducing mass, the project lowers embodied carbon in the built environment, paving the way for cleaner, more efficient construction methods. Beyond its structural and material innovations, Glass Bridge aims to inspire architects, engineers, and researchers to rethink conventional detailing methods and explore thin-sheet-based construction for lightweight, high-performance building and infrastructure components. It stands as a testament to the potential of advanced material strategies in shaping a more sustainable built environment.",
        creatorName: "Yao Lu",
        color: "#ffffff",
        categoryTags: ["Innovate", "Adapt"], // Updated
        imagePrimary: ["images/2_reflection.jpg"],
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Xylazine Harm Reduction and Wound Care",
        projectDescription: "The rise of xylazine-adulterated fentanyl requires an evolved response that brings together expertise from multiple disciplines and the lived experience of people who use drugs. Xylazine, an animal tranquilizer not approved for human use, is heavily sedating and can slow breathing endanger physical safety, causes an extremely and unique withdrawal syndrome, and is associated with severe wounds that at times require amputation.1 In the first half of 2023, 99% of drugs sold as “dope” in Philadelphia contained both xylazine and fentanyl.2 It has spread rapidly across the United States and emerging reports indicate it is found in the drug supply in Europe.3,4 With support from an NIH grant entitled “Community-Informed Approaches to the Escalating Presence of Xylazine in Opioids,” researchers from the College of Population Health, Kanbar College of Design, Engineering and Commerce, harm reductionists, and clinicians have collaborated with people who use drugs to co-design xylazine related interventions to reduce the harms associated with xylazine use. The resulting project is a multi-media campaign that serves the needs of health care providers and patients in the form of an instructional video, educational webinar, wound care kit with informational pamphlet, and a poster. These materials deliver information about harm reduction within a framework driven by empathy and stigma-free messaging. Inclusive mediations such as this are critical for improving health outcomes, building trust in communities and providing impactful free resources with a small footprint.",
        creatorName: "Maribeth Kradel-Weitzel",
        color: "#ffffff",
        categoryTags: ["Adapt", "Sustain"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Spinal Cord Injury Patient Resource",
        projectDescription: "A new spinal cord injury (SCI) has a profound and permanent impact on a patient’s life, often eliciting overwhelming feelings of uncertainty, loss, isolation, and fear. The educational materials patients receive are crucial for empowering patients to navigate the daunting challenges of their new reality. Clear, accessible materials that ensure patients and their families can comprehend complex medical terminology, make informed decisions about their treatment, and better navigate everyday life can ease the mental burden of this stressful time. The Jefferson Moss-Magee Spinal Cord Injury program physical therapists Ben Ayzenberg and Erin Freimuth collaborated with Thomas Jefferson University Professor of Health Communication Design and Director of the Creativity Core Curriculum, Maribeth Kradel-Weitzel to redesign the SCI Patient Resource Binder provided to all new SCI patients. The existing material was redeveloped via a process that highly prioritized patient feedback in combination with caregiver and provider perspectives. The resulting piece provides the vital information patients want in a manner that is logical, understandable, and memorable. Content exists in physical and digital formats and incorporates augmented reality for ease of use wherever and whenever patients wish to engage with the material. Practical medical information, original medical illustrations and resources are interspersed with moments that address emotional aspects of this journey such as patient stories and whimsical illustrations that support feelings of delight and possibility. ",
        creatorName: "Maribeth Kradel-Weitzel",
        color: "#ffffff",
        categoryTags: ["Adapt", "Sustain"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Philadelphia Family Court Sensory Space Redesign – Jefferson Center for Autism and Neurodiversity",
        projectDescription: "Family Court can be overwhelming. The Family Division of the Court of Common Pleas of Philadelphia (Family Court) handles cases related to family law, including divorce, child custody, child and spousal support, domestic violence, and juvenile matters. Families are understandably anxious about the outcome and managing neurodiverse family members in a public formal space. The Philadelphia Family Court recognized these issues and approached the Jefferson Center for Autism and Neurodiversity (JeffCAN) to discuss how the needs of families could be met given the parameters of formal court proceedings. After several meetings with court administrators, courtroom tours, and environmental assessments, plans were developed to redesign an underused space in the courthouse. Family Court administrators and JeffCAN staff collaborated to create a relaxing, yet active, quiet space. Court administrators and building maintenance staff consulted with occupational therapists, neurodiverse experts, and experienced parents to create a neurodiverse-friendly space for children and adults. Away from the bustling waiting area for the courtrooms, the innovative design allows dimmable lighting and a variety of seating and activity options, including rocking chairs for adults, beanbags, fine and gross motor activities for children and young adults. Noise cancelling headphones and fidgets are also available to address sensory needs. (Additional photos are available with adult spaces and ceiling modifications.) The court check-in process includes administrators providing lead time for families to re-enter their courtroom in time for formal proceedings.",
        creatorName: "Sabra Townsend",
        color: "#ffffff",
        categoryTags: ["Adapt", "Access"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Textile Facades-Explorations in controling solar gain with textiles",
        projectDescription: "This paper examines the key requirements of façade systems to determine whether membranes are a viable option for creating thermal comfort for occupants and creating a healthy environment. Since heat transfer is a critical factor in solar protection, in this research, the basic heat transfer principles will be discussed, and the ESTM24 Test Method is utilized as the Standard Test Method for Solar Energy Transmittance. To conduct the experiments, two testing apparatuses—boxes approximately 17 in² in size—are used. When testing outdoors, measurements are taken under clear sky conditions, while indoor tests are conducted on cloudy days. To simulate sunlight intensity indoors, four 50-W tungsten lamps are strategically placed using a calculated distance to match real-world solar exposure. The heat transfer characteristics of different textiles are measured and analyzed for each testing condition. Finally, the experimental results are compared with simulations using Honeybee to assess accuracy and reliability.",
        creatorName: "Mojgan Sadat Akhavani, Darya Afshar, Rajshree K-C",
        color: "#ffffff",
        categoryTags: ["Innovate", "Adapt"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "DOVE Device",
        projectDescription: "Over 100,000 accidental overdose deaths impact families across the US annually, with opioids driving over 75%—one every six minutes. High-risk populations, including individuals experiencing housing instability and reentry patients (returning to communities after a period of abstinence following incarceration or medical detox), face heightened vulnerability. Unlike current solutions—such as invasive monitors, smartphone-dependent devices, or systems focused solely on pulse oximetry—the DOVE Device employs multi-biomarker monitoring (SpO₂, respiration rate, motion) and operates as a standalone device (Attachment 1.) This approach delivers comprehensive overdose detection and alerts, even when people who use opioids lack phone access or stable housing. Through participant interviews with people who use opioids with human-centered design interview methedology, the team solicited feedback that was used to create an accurate shoulder-mounted sensor. DOVE meets participants’ desires for a device that is discrete, comfortable, and can be worn for an extended period. This shoulder-mounted, standalone device, smaller than a smartwatch, uses advanced pulse oximetry to detect overdoses and alert bystanders and first responders quickly, reducing the risk of severe, long-term neurological damage due to delayed intervention. Supported by extensive research, including a 100-patient user preference study, an acceptability study on real-world patients, and a sensor feasibility study, DOVE has demonstrated high acceptance and effectiveness in detecting respiratory suppression. From the onset, the DOVE project has been approached interdisciplinary manner, with cycles of design thinking and iteration that complement clinical trials.",
        creatorName: "David Gordon (DOVE Device Team)",
        color: "#ffffff",
        categoryTags: ["Innovate"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "The Side Yard House; A New Typology for Affordable, Sustainable, Modular Mass Housing",
        projectDescription: "Our current spate of social, economic and environmental crises all coalesce in the US housing crisis. Thirty percent of households have “unaffordable” housing payments. Population demographics are changing with greater demand for more affordable homes that don’t exist. And our climate is changing quickly but our homes’ energy efficiency is not improving fast enough. This new typology of smaller homes is adaptable to a range of locations, utilizes passive energy strategies, saves construction costs with modular prefabrication, and is thereby more affordable. All models share a common concept, based on the Charleston House Typology, that relocates the home along the site’s north edge to provide greater access to sunlight, fresh air, and green space. This orientation ensures all units have abundant sunlight for passive solar heating, daylighting and PV power. Operable windows for cross ventilation and passive shading from the overhanging balconies also increase the passive design strategies. The Side-Yard House was designed to be adaptable to three distinct rings of the city to address the specific needs of each area’s demographic. The SUBURBAN model is designed to combat suburban sprawl. The (sub)URBAN model is a hybrid that incorporates amenities of both suburban and city conditions. The URBAN model is a smaller home designed to fit in to dense urban infill pockets to combat gentrification. Because of the increasing costs of construction, all models of the Side-Yard House are designed to be premanufactured modular construction as this method is typically up to 20% less expensive than standard construction.",
        creatorName: "Craig Griffen",
        color: "#ffffff",
        categoryTags: ["Resist", "Adapt"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Motivity: Getting Patients Moving",
        projectDescription: "Increasingly, evidence suggests patients who ambulate following surgery have improved outcomes. Today, much of this patient activity requires the time and attention of a nurse on the service, with the patient tethered to an IV pole for medication. While IV poles are in every patient’s hospital room, their form has barely changed since their conception in 1904. At that time, the model of care did not encourage patients to move about the hospital as is routine today. Moreover, the scope and types of equipment fastened to this pole have changed considerably over the last century, and it no longer sits motionless at an immobile patient’s bedside. Meet Motivity. Motivity is a proposed IV system that addresses the mobility, stability, and ease of patient navigation, accommodating adult and pediatric patient populations for patients to navigate the array of potential hazards associated with ambulation with the standard IV pole. The team has advanced technical development through working prototypes, leveraging custom 3D printed handles and joints to secure the Motivity system’s components and off-the-shelf parts, including smoothly articulating wheels and telescoping mechanisms. The team completed nearly 100 hours of nurse and team member observation at Jefferson Abington Hospital to assess patients' walking and identify specific pain points. A pilot study of nursing-driven prototype evaluations was recently featured in the Journal of Health Design.",
        creatorName: "David Gordon (Motivity Team)",
        color: "#ffffff",
        categoryTags: ["Innovate"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Vertical + Horizontal: Redefining High-Density City via Generative Urban Design",
        projectDescription: "The number of horizontally connected tall buildings at height has increased significantly worldwide in recent years. These horizontal connections often serve as enclosed circulation, and also offer amenities and green spaces. However, the number and scale of such horizontal connections are very limited, and the environmental benefits by bringing horizontal to vertical realm have not been fully examined. The chapter will introduce a new typology of high-density cities by integrating horizontal and interconnected volumes into vertical growth, and use a generative design approach to develop urban forms and quantify their environmental performances via a Bangkok-based case study. Specifically, a multi-objective evolutionary algorithm was applied to the study, by involving a wide range of variables such as street network, building pattern, vertical and horizontal connection, and 3 performance objectives including density (FAR), green space area, solar energy potential, and view percent. The algorithm ran a population comprised of 100 generations with 75 solutions each via Wallacei, totaling 7,500 urban solutions and 30,000 performance values. The entire population was filtered down to a significantly smaller pool through statistical and comparative analysis. The selected “best solution” was further refined based on more detailed building and landscape typology design.",
        creatorName: "Peng Du",
        color: "#ffffff",
        categoryTags: ["Innovate", "Adapt"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Examining the Link Between Stress and the Built Environment in Urban Emergency Department Waiting Rooms",
        projectDescription: "Livable and healthy cities rely on healthcare networks that deliver excellent and efficient services to their populations at every stage of the wellness process. Unfortunately, many modern cities include medical facilities that have been designed without consideration for patient needs, leaving these users frustrated with systems that fail to prioritize them. Spaces that are especially noted as being inadequately designed are waiting room areas, which have been found to contribute considerably to patient stress. To determine the degree to which factors in the built environment influence this stress, a two-part study was conducted in the spring of 2023 in an urban, academic teaching hospital emergency department waiting area. During stage one, 106 patients and caregivers were surveyed to provide demographic information, stress levels, and opinions concerning environmental qualities (sounds, temperature, views, lighting, etc.). Across all participants, results showed that there was a moderate correlation between total stress scores and mean environmental domain scores. Furniture layout, privacy, and sounds were noted as some of the most poorly rated qualities in this survey. During stage two, three virtual reality simulations were constructed using the results from the prior investigation to create proposed improvements to the waiting area. Twenty-four staff members and potential patients utilized additional surveys and qualitative feedback to provide pros/cons for each scheme, which revealed noteworthy contrasts between staff and patient needs, specific to urban locations. This data is able to act as a case study to inform modern inner-city emergency room stress reducing design solutions",
        creatorName: "Lisa Phillips, Louis N. Hunter, Jenna K. Rieder, Morgan Hutchinson, & Patrick Moeller",
        color: "#ffffff",
        categoryTags: ["Innovate", "Access"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "London Lines",
        projectDescription: "London Lines is set to address the ongoing housing crisis, lack of public green spaces, and failure to connect these spaces to public transportation. Located along the Thames River just west of the Tate Modern Museum in London, U.K., the nearly 15,000 m^2 site entangles the Blackfriars Railway creating direct access to the larger London metropolitan area. The main objective of the design was to integrate a multi-functional program within a two-towered multi-structure fluid design that connected residents, working people, and the main public to one gathering space.",
        creatorName: "Reagan Cope",
        color: "#ffffff",
        categoryTags: ["Resist", "Adapt"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Trinity Towers",
        projectDescription: "Trinity towers is located in the southwark borough of London, UK and is the merge between a need for green, privacy, and better mental health in the borough . The towers are used for office spaces (2) and residential apartments (1). The office towers host restaurants, sky lounges, and other amenities. The tower features floor plates that incorporate sky gardens to bring fresh nature inside into the building’s walls. The sky gardens improve air quality, mental health, and overall quality of inhabitants of the building.",
        creatorName: "Steven Graziano",
        color: "#ffffff",
        categoryTags: ["Resist", "Adapt"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Harbor Haven Research Campus",
        projectDescription: "Establishing a scientific campus in canary wharf that integrates residential and research facilities would not only foster innovation and collaboration among scientists and entrepreneurs but also revitalize the local economy, enhance community engagement, and promote sustainable living, ultimately positioning canary wharf as a leading hub for scientific advancement in London.",
        creatorName: "Mike Capuano",
        color: "#ffffff",
        categoryTags: ["Resist", "Adapt"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Shadows at Cliveden",
        projectDescription: "Shadows at Cliveden explores the profound relationship between natural light and architectural space through the medium of black-and-white film photography. This project, created by Thomas Jefferson University Assistant Professor Andrew Hart with students from across campus disciplines ranging from fashion to architecture, interiors to nursing, documents Cliveden, a historic house in Philadelphia’s Germantown neighborhood, where daylight has shaped human experience for centuries. Built before the advent of electric lighting, Cliveden was designed to maximize natural illumination, relying on carefully placed windows, reflective surfaces, and the shifting qualities of daylight to define its interior atmosphere. These same principles, now recognized as sustainable daylighting strategies, are finding new life in contemporary design for wellness and sustainability for reducing energy consumption while enhancing spatial experience and well-being. Film photography is uniquely suited to capturing the nuances of natural light, revealing the subtle interplay between illumination and shadow in ways digital media often cannot replicate. Utilizing a Single Lens Reflex (SLR) camera setup allows the observer of the image to ‘share’ the view of the photographer’s eye in the space. sharing more visceral and connected experiences, combined with 35mm film, students explored how light moves through Cliveden’s interiors, documenting ephemeral moments where architecture and atmosphere converge. The unpredictability of film—its sensitivity to light and the dynamic range it preserves—mirrors the fleeting nature of daylight itself. Variable weather during the project across seasons, emphasizes the changing conditions architects and designers have long considered when designing with natural light.",
        creatorName: "Andrew Hart",
        color: "#ffffff",
        categoryTags: ["Adapt", "Access"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Reflections of North Philadelphia: Expressions of Community Identity and Community Health in the Sharswood Neighborhood",
        projectDescription: "Reflections of North Philadelphia is a collaborative visual project that gathers and reinterprets cultural data, imagery, and community narratives from the Sharswood neighborhood of North Philadelphia. Exploring how the built environment influences well-being, this project highlights the deep connections between design, health, and community resilience. The project emphasizes Sharswood’s layered identity, reflecting themes of social cohesion, mental health, and environmental health through a visual language rooted in jazz improvisation, graffiti, and mural arts. These creative expressions are not just cultural markers—they are essential to collective well-being, offering a sense of belonging and continuity in a neighborhood shaped by cycles of disinvestment, transition, and revitalization. More than artistic expressions, these collages serve as socio-cultural health indicators, illustrating how residents shape and respond to their environment. The project highlights the impact of public space, cultural memory, and neighborhood identity on mental health and population health outcomes. It also considers environmental sustainability, exploring how urban landscapes can be designed to support physical and psychological well-being. By bridging design, public health, and community narratives, Reflections of North Philadelphia underscores how cultural vitality plays a crucial role in shaping healthier, more equitable urban environments",
        creatorName: "Andrew Hart, Grace Ong Yan, Michael Spain",
        color: "#ffffff",
        categoryTags: ["Adapt", "Access"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Soft Shells",
        projectDescription: "Soft Shells explores the use of fabric formwork to create lightweight, carbon-absorbing concrete structures with intricate curvature and expressive surfaces. By digitally controlling the local mechanical properties of the fabric, we guide how the material stretches, sags, and reacts under the weight of fluid concrete—allowing complex geometries to form naturally through the interplay of tension and gravity. This process not only produces structurally efficient shell forms but also leaves behind a rich textile imprint, giving the concrete a soft, tactile quality that challenges traditional notions of the material’s hardness and rigidity. To address the environmental impact of concrete construction, we are developing carbon-absorbing concrete mixes capable of sequestering CO₂ from the atmosphere. As an alternative to synthetic reinforcement, we incorporate hemp fibers—a biodegradable, renewable material that strengthens the shell while supporting a more sustainable material cycle. These prototypes are not just experiments in form, but are also envisioned as scalable architectural elements such as façade panels, modular tiles, or structural surfaces. Through the integration of computational design, robotic knitting, and material research, Soft Shells offers a compelling vision for how future building systems might blend environmental intelligence, digital fabrication, and the expressive potential of soft, adaptive formwork.",
        creatorName: "Yao Lu, Christopher Pastore, Harnoor Singh, Aanchal Ram Kanojia, Meghan Kelly, Sangram Ramesh Shinde",
        color: "#ffffff",
        categoryTags: ["Innovate", "Adapt"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Bird Song",
        projectDescription: "The color patterns in the bird song visualization are inspired by the typical color identification used by birders, focusing on key parts of the bird's body such as the wings, belly, head, and beak. The circles are distributed in a ratio that generally matches the scale of the bird body parts. Multiple colors can be selected for frequently multi-colored areas like the wings and head.  This approach produces an iconic symbol that mirrors the bird's coloring. The resulting graphic provides a dual-channel output, pairing sound with visual elements, which can enhance the retention of both the bird song and its associated colors in memory enhancing the perceptual understanding of the bird. Bird song visualization can be integrated with smart devices to provide alerts for various users. It can benefit those with no auditory abilities, older individuals experiencing hearing loss, or birders in urban environments where bird sounds compete with traffic, airplanes, and other human-generated noises. A gentle haptic vibration could accompany the visual output, adding a tactile dimension to the perceptual awareness channels. This feature could be implemented on a smartwatch or as part of a wearable device, minimizing distractions and enabling real-time awareness without the need to navigate through screens and buttons to capture the sound.",
        creatorName: "Renee Walker",
        color: "#ffffff",
        categoryTags: ["Innovate", "Access"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Nucleus Pulposus",
        projectDescription: "A color-coded, composite image of Nucleus Pulposus Cells isolated from a rat’s intervertebral disc cultured on a soft substrate. This soft material influences cells’ shaping and clustering to resemble how they would interact in the human body. This helps us answer fundamental questions about how cells may behave in healthy versus degenerated, fibrotic tissue in a Petri dish. We can then better understand the underlying mechanisms of disease states and elucidate targets of interest.",
        creatorName: "Kimheak Sao",
        color: "#ffffff",
        categoryTags: ["Innovate"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "An Immersive Deep Dive into Calm",
        projectDescription: "This study investigated how an immersive art installation could reduce stress and improve mood for students, faculty, and staff during final examination week at Thomas Jefferson University. The installation, designed by undergraduate students, featured large-scale projections of calming imagery such as waves, jellyfish, and stars, accompanied by slow, meditative music. The goal was to create a multisensory environment encouraging relaxation, mindfulness, and emotional reset. Participants completed pre- and post-visit surveys, including the Positive and Negative Affect Schedule (PANAS), to measure emotional changes. A total of 155 respondents provided complete data. Results showed statistically significant decreases in negative emotions such as nervousness, distress, and irritability, and increases in positive feelings like relaxation, inspiration, and rejuvenation. The median PANAS score increased by six points after the experience, indicating a notable improvement in mood. Qualitative feedback echoed these findings, with participants describing the installation as calming, peaceful, and restorative. Many reported a sense of mental clarity and stress relief, often comparing the experience to meditation or mindfulness practices. Suggestions from participants called for such installations to be available year-round to support student well-being. These findings suggest that immersive art installations can serve as effective interventions for stress reduction in high-pressure academic environments. The multisensory, absorbing nature of the experience facilitates deep engagement, emotional regulation, and psychological restoration. Future research will explore the long-term impact of such installations and how they can be integrated into mental health strategies on college campuses.",
        creatorName: "Lyn Godley",
        color: "#ffffff",
        categoryTags: ["Innovate", "Access"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Waiting Room — Immersive Art for Well-being",
        projectDescription: "This project, Waiting Room — Immersive Art for Well-being, explores the impact of dynamic light art installations on viewers’ sense of calm and well-being within a simulated healthcare environment. Building on research demonstrating art’s ability to improve healthcare experiences — including shortened hospital stays, faster recovery, and reduced pain management needs — this study focused on whether dynamic, immersive light art could offer similar benefits. The project featured 11 dynamic light installations, each blending slow color transitions, rhythmic motion, and soothing visual patterns. Participants were invited to experience these installations and complete electronic questionnaires designed to capture their responses. The feedback focused on user experience, engagement duration, and perceived emotional impact. With 195 responses collected, the results were overwhelmingly positive. Participants frequently reported feelings of “calm,” “peacefulness,” and reduced stress after engaging with the installations. This suggests that dynamic light art can be a powerful intervention in high-stress environments, offering moments of respite and mental clarity for those confined or waiting. The study also identified opportunities for future research, including deeper investigation into which specific aspects of the installations — such as rhythm, color, or interactivity — are most effective. Additionally, future studies will explore how different populations, such as patients, caregivers, or visitors, respond to these environments and how interactive technologies might further enhance the calming effects. Ultimately, this work highlights the potential for dynamic, immersive art to transform healthcare settings into healing and emotional restoration spaces.",
        creatorName: "Lyn Godley",
        color: "#ffffff",
        categoryTags: ["Innovate", "Access"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Little Brain of the Heart",
        projectDescription: "Thirty years ago, the scientific and medical communities were desperately trying to find answers for heart disease, which has been the single biggest killer in the United States since 1921. Attention turned to a massive and meandering network of nerves called the vagus nerve—it carries signals from the brain, the master organ of our body, to other organs, including the heart. Scientists found that when these signals weren’t sent properly, it could actually impair heart health and even lead to heart failure. When they poked the vagus nerve with an electrode to help jump start it, they found that an ailing heart could actually pump better! It was a thrilling finding. But there was a problem: the scientists didn’t know where the vagus nerves ended in the heart— was it a certain chamber, or a muscle, or an electrical node? Which of these connections could explain how the vagus nerve affects heart health? Around the same time, the early 1990’s, researchers found that the heart had nerve cells or neurons that were akin to the ones that made up the brain. In other words, the heart had its very own nervous system that could function independently of the brain! Affectionately called “the little brain” of the heart, it became a point of fascination in the field—why does the heart need its own nervous system anyway? How does it help the heart function? It also became a potential target for the vagus nerve. Could a connection between the brain and the “little brain” be the key to restoring heart health? Drs. Schwaber and Vadigepalli have been at the forefront of trying to answer these questions for the last 25 years, giving critical insight into the heart’s nervous system. In the last five years, serendipity brought them together with like-minded experts and advanced technology that allowed a major breakthrough: the first ever 3D map of the heart’s “little brain.” It is a map that gives an unprecedented look at not only how the neurons are organized in the heart—that undiscerning blob of yellow dots—but also their biological properties. For the first time, our researchers are able to appreciate the spatial and functional relevance of the heart’s neurons in keeping the organ healthy, giving us new clues about how to tackle the longstanding issue of heart disease.",
        creatorName: "Shaina Robbins",
        color: "#ffffff",
        categoryTags: ["Innovate", "Sustain"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "The Ubiquitous Nature of Microplastic Fibers",
        projectDescription: "The research project was conducted to assess the levels of microplastics in the Atlantic ribbed mussel, an ecologically important species that feeds by passing large volumes of water through its gills to remove food.  In the process of feeding, they also invertedly filter out microplastics from the water and accumulate them in their tissue.  Our study found significant levels of microplastics, dominated by synthetic microfibers, in their tissues. Although humans do not typically eat this species, the same mechanism is used by oysters and may represent a human exposure route for microplastics. The image shows various microfibers observed under a digital microscope.",
        creatorName: "Jeffrey Ashley",
        color: "#ffffff",
        categoryTags: ["Innovate", "Sustain"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "The Galaxies in Our Bones",
        projectDescription: "My thesis project studies how non-steroidal anti-inflammatory drugs influence bone strength and fracture risk and this is an image I took of bone cells called osteocytes that have an extensive dendritic network and stellate shape. Their networks have always remind stars, so I colorized the image to look more like the pictures of galaxies that we commonly see.",
        creatorName: "Alexandra Ciuciu",
        color: "#ffffff",
        categoryTags: ["Innovate"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "The Art of Geology",
        projectDescription: "At Delaware County Community College, I participated in research of geodes and other minerals with Daniel Childers, PhD. In this particular project, we visited West Chester University and utilized their scanning electron microscope (SEM) to observe the microscopic shapes of quartz crystals. The element analysis found that the main composition of the specimen shown was silicon dioxide with traces of iron and manganese. My experience during this project was extremely enriching and it was enjoyable beyond words to see the beauty of nature up close and personal.",
        creatorName: "Katelyn Hayat",
        color: "#ffffff",
        categoryTags: ["Innovate"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "A Tapestry of Life",
        projectDescription: "The Hermitage of San Baudelio de Berlanga is an early 11th-century church in Soria, Spain. It is an important example of Mozarabic architecture for its peculiarities. The 3D scanning of the hermitage’s interior resulted in the building’s dissection, showing its anomalous frescos and architectonic elements. In the realm of dissection’s artful gaze, exotic mysteries unravel in a haze, amidst palm trees swaying in the gentle breeze, a canvas painted with the wonders of these. Animals roam, a tapestry of life, intricate as a surgeon’s skillful knife, their stories etched in stone, in nature’s hands, A history told across expansive lands.",
        creatorName: "Severino Alfonso",
        color: "#ffffff",
        categoryTags: ["Innovate", "Adapt"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Temperature Quilt",
        projectDescription: "As temperatures warm around the globe, the Current Temp Quilt visualizes temperatures from different cities around the globe with jSON weather data. Like the feeling of heat on your skin, this display converts current temperature data to color values on a scale from cold to warm mapped with cooler temps in the blue-green range to hotter in the red-orange. The display allows for comparison among cities giving you an at a glance sense of what the world feels like right now.",
        creatorName: "Renee Walker",
        color: "#ffffff",
        categoryTags: ["Resist", "Innovate"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Herbs Under the Microscope",
        projectDescription: "Inspired by The Herbal Kitchen, this display blends holistic and Western medicine through herbs. Each column showcases an herb's molecular structure, with an overlaid sketch of the plant. The benefits of each herb are highlighted: Garlic (far left): It lowers blood pressure and fights infections. Cinnamon (middle left): Regulates menstrual cycles and supports menopause. Ginger (middle): Aids digestion, relieves nausea, and reduces pain. Rosemary (middle right): Promotes liver health and stress relief. Oregano (far right): Soothes coughs and supports digestion.",
        creatorName: "Grace McCaughey",
        color: "#ffffff",
        categoryTags: ["Innovate", "Sustain"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "MRI of Okra",
        projectDescription: "The project was part of an educational program I developed to train future Radiologists on MR Imaging machines - this training is quite unique since (at least in the US, and unlike what you see on TV, like 'House') doctors almost never actually work the machine. This is the purview of trained technologists. However, I learned how to operate MR imaging scanners many years ago, and I found that it helped me understand more about how to better diagnose disease on the patients' images - by understanding the physics involved in acquiring the images. I sought to teach the trainees this knowledge - so I arranged for weekly time on the scanner, and I invited them to participate on a voluntary basis. I asked each to bring a fruit, vegetable or something else they thought would be interesting to view on MRI. We had many valuable sessions! I collected many images over the years, and found many of them to be quite beautiful - so I colorized them using various filters and Photoshop to make an artistic rendering of the internal anatomy of the produce.",
        creatorName: "William Morrison",
        color: "#ffffff",
        categoryTags: ["Innovate", "Sustain"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Double Knit",
        projectDescription: "The structure of a double knit fabric can be seen here with loops forming on both sides of the fabric.  This is a cross-sectional cut of the fabric to show the interior structure.",
        creatorName: "Chris Pastore",
        color: "#ffffff",
        categoryTags: ["Innovate"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Heart of Resilience",
        projectDescription: "This is a field of view is a photograph of metastatic breast cancer. Symbolizing the strength and resilience of women battling this disease in our health system. The perspective shown is from a cytologist’s point of view and how we see the patient. Rendering our interpretation and playing an integral part in the patient’s treatment journey.",
        creatorName: "Ashley Zucker",
        color: "#ffffff",
        categoryTags: ["Resist", "Access"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Optical Wiring",
        projectDescription: "Within the brain, neurons communicate with each other through complex structures called synapses. The formation of numerous synapses between multiple neurons to achieve a specific function leads to the creation of neuronal circuits. This image of a fly eye shows the synapses (blue or red) and neuronal membranes (green) of multiple types of visual neurons. These neurons connect with other neurons of the visual system to form a circuit that relays visual information from the eye into the processing centers of the brain. Visualizing circuits helps us better understand how the nervous system develops and functions.",
        creatorName: "Michaeil Aimino",
        color: "#ffffff",
        categoryTags: ["Innovate", "Access"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Echoes",
        projectDescription: "Echoes is an immersive environment that aims to raise awareness and acceptance of neurodivergent spatial experiences, creating a meaningful connection between art, technology, and human perception. Autistic individuals are significantly impacted by sensory input, making their physical environments critical for their ability to engage with the world around them – spatial access remains consequential to agency, empowerment, and self-possession. The concept of disability is constructed not just at the site of the body but also in multiscalar architectural operations, in the spaces that mediate between us and our desires.  Expressions such as rocking, vocalizing, and fidgeting carry a stigma, yet these are ways of personal existence, thinking, and creating to be acknowledged and celebrated rather than sympathized with. Echoes invites us to use our experiences and bodies to empathize with the emotional experiences of others.",
        creatorName: "Loukia Tsafoulia, Severino Alfonso",
        color: "#ffffff",
        categoryTags: ["Innovate", "Access"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    },
    {
        projectTitle: "Synesthesia",
        projectDescription: "The multisensory, interactive, traveling installation Synesthesia evokes a sense of place by combining sight, sensation, movement, touch, memory, and perception.30 Indirectly referencing the neurological condition, Synesthesia investigates the combined sensory and cognitive aspects that make up an experience through a choreographed collection of body-like elements, light and sound effects projected, layered, and superimposed on top of each other in a unifying mesh. Conceived as a deformed sphere—a central, internal node of multiple projections shaped like a blob and based on topological deformations—Synesthesia acts as a three-dimensional cinema.",
        creatorName: "Loukia Tsafoulia, Severino Alfonso",
        color: "#ffffff",
        categoryTags: ["Adapt", "Access"], // Updated
        imagePrimary: "images/2_reflection.jpg",
        imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    }
    // {
    //     projectTitle: "Unkown",
    //     projectDescription: "",
    //     creatorName: "Unkown",
    //     color: "#ffffff",
    //     categoryTags: ["Resist", "Innovate", "Adapt", "Sustain", "Access"], // Updated
    //     imagePrimary: "images/2_reflection.jpg",
    //     imageSecondary: ["images/4_connection_details.jpg", "images/3_steps.jpg", "images/2_reflection.jpg"] // Multiple images in an array
    // },

];