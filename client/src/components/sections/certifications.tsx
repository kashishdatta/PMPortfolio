import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Certified Scrum Product Owner",
    issuer: "Scrum Alliance",
    date: "May 28, 2025",
    credentialId: "001758543",
    description: "Comprehensive certification covering product strategy, roadmap planning, user research, and metrics analysis.",
    skills: ["Product Strategy", "Roadmap Planning", "User Research", "Metrics & KPIs", "Backlog Management", "User Story Writing"],
    verificationUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7333656575590432768/",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAUe0lEQVRogV16a9BlV1nm87xr73POd/++vqev6TRJSMBkyAgJZAApUXAIWlBBi3EKGfyBI1VCSpkZapTrKFAOlAwqOmMosQapGiiRjIoOINExXKJcEjqkO0mTdEJ30rd8/V3POfvs9T7zY621TztdXd3fOfvbe631Xp73eZ938yfueg1AIACQCAmQBJqBZgAcUYBYYdTW2IoBq+MK71x+xH559+PLjewYZN62eowALPgNCGGxX+M7f766b/U/PnXUl3rSbB0xWztIQSDgkIMAHJAgIl0RJQKEQAmAgTIAggjAAEFwiSQlc4CgGqkKNDgEuSAABPJB0kISARCTCOzTBvZWLR+PA+yvRxVZfQwIPxbol6vKPy7hGcD+M8CDFP7uunrz126p18/v6HvcQNCTzYCDnmBIByJE0iQ6kb8BCFIkKCl9IzoIkmQ2OZnvB2XpewMqkmA+CEik/5h+FAAaJm5Y8iE+suf4oSOD8RsahW867FuoMA6OeQHbpB2m4/kC5gChjdx3dDAc3P2cR583129vamlf+PAPD2/8xdYuLNUOABCVNpQ+IPlD5UL6HgJJ5AvIJ0KAS8nPgoM0skqPQ7KK0P2RM3uHaJ3Y6c3gqqr5WER4RR3wtYnjF+7bXPyd588M1xbMHxR5H4OOQTwo+LUCP1lTi4Ht3dF5bVXHm64bjP5T3AguAoAjRZYgUkD+AF6xF08WdkGUKINEEY7kPGZHpbsqyJHskExEMVsJGLbE9sRwqamxxIG1Xs0EcUzE/X+/ttL/+aee+/3fO/Tou+/cdSmCjIj+JIKfAnWwcT4M1zvd8fycia/61vr8f73chAsrgygDSDK7AQKg7IG8mallZRCL0XN+pQtSuo0QHBXSCbo7xbT0OAIv6q/iVUvP2plRtTBP367Id0PhN+H6X1vee6buBf/c2p7tQBMAPjXu4ey4PvXa3aunbp1d73nEpogxJE4i1161dG7fYj9eund7R4wBCHSKAAW6pVMBYD5exgEBZBd1ZPaZ1PkEICCpylFZ4jLFLYWmFd649wJesLD2ckzib8D9y5NY/YGLbwnSxQkZdw5aPMU5fejyXDKy17g4IjZCDy8crE0q6qOAn3HoxTA78YqdG0deYcPJxcfqR780XG73zbYIaT9izo2EaDlx0vYFAV6iil2yAcnjTNkEhmtuuxYdjKU8pIOIEXj90kXuZvuWNoZXOsLNIdhfAjz16Yu7209u7EeoDf0K6FVAPxB9i5yvHWtthSebGX55fUfzxdVd3zk80zy8t57cOXH7KUb82M2zG+dnzE89NJpL4MuCYoChwHL5ayjnZcqystXkQZIwg9xRdaGZI42A4EIUsB0ltJNPS/asBc7EEB77m/UVfODSYeycBxYt2cGVoFaAjMLYAv9ic7cmXuHS2Liv3+y7cbD5asZIJ/2qKv7s2/ae/er3moXm+HAOvVoJiT3tLcebuk0nGEtbzT5JcGsZNFJgVum86bey61IKCYgJ3h8z4A+GE+JXfnBsfH+ziH0L4iBIGW3SrSW2CQSD6r5D3pAw7R60fQg9wQGZWtmlivAlTtC6ILlK3vsViJry3YUuNQimrCe7lQGlr1AlewqkJUiBIBLBHDP0FcB+XsY9PeAzVw/GJx5woc7okmJVYLoRRk/2JCGJLQij8Jze8PsSPwnaAMIPouxPv7c5F0+OZ9gLkltJ4RRGxSkiu9pX7JaAW8qkYOo6ApUkTE+eAcAMAxPmTf8C1K+K7LHiyXcfOX3itvUt/NazRwDLm3cmOIfDnbBUpEFCwZxgwEYMzzDwN2qHEd587PzB9k/W93GhJ5+pcnBDCOnHjK0l7LuTlnDqgkxXeCeQDNfcen0mBwBhZIJttDKMJ27H6vHeucofouFL45bn7t9a0APtAoxEyBVCKVVhV0Qr2dVzPtsYjvTG3qsUT8X5+PurV2sSAuYqT8nOabqmpwlMZRGEdc/LBTJtkInDSQUFQf7E2+9AOjwTscxujoAujMHD3AqfOvRYWKij7jxxY3s8LujaxVZe7CmlwzjyaTD1dLbecGKsvcXO2rnlPWzC1K8EQ8k7AYmDFgRKHumKRfaXMgoYEmsQ4PJUNN1hKhugAKUHy9L5FoJ0wftxC1ZXQde8fGU13LawiWFLyBMhgRGU5XUK08p5AxIiB8ER64Czsa/1lFtkckhhjx0DmcJV96iu0OhKeiAR8mRPk2CCmTL/VMYJCfRyNGIlxNAn/wNof3bXodM3vO/AE1gbClsxoIJgAkiHlRpRwszLLhIxqQQ4jOMYNJwErTemVoLDqUIOM8XvMkLF9ZATAqycsFSermgCkGWyhgxq+X54wZTZ4HFguhQjHmkm9eY+G/KD+0/hhmoTw0kioe6G8kQHMXJiJNC7fDBcbow/Wl/C7x54iHdf/T3+7PJZrI6NbZtKOtilR9nGNGRRykfBTeZtFi+lNcLR267LrszUP4MFQUqATxwvm904vqsa39OC5wL1vOtnN547oJ2959IO70MYyxIHpmErBiyhQS1hdRI4MHB9UnMQJ/zgwZO8aX6r3lM14UVz6zy92cN3txc52ys0P1E1y4W9w6uUMQQBE8vZEm8rxQ1AuObW69LWDcUCnY9JoJHhvvXZyWasxjfPDZco/brEvXts+E+3z11u37T74uA1K5fx1WcX9cRWH//lqkd5154f9l+3dD5sNpV/5dIOvnLhAj988KQdrJt90cPNcC4FaP32xbXYOPWNjWWSxomgJqY0NCoTmEIwCesKe4GG1NHADIQjXHPb9Si1ibnN6+h3Pvi52MNjwwF+ZmnVZiy2Lv79gH7h4KDdt1jrrTt74/H9F2cvLrDhuw6dflmffNtMaG/ZF8YnP/vUzu13HDhjtyytHXUPnwryt0P6Nw7b3a95/w2z2/H/PruotUmtPZpgNxtsxIAIYw0hWzkdp2PEeb+m0rMBEqqSY1Y6hpKMOZCN4GxF7amEQc1xAP42eIygHMQuIO6DY+7th3+4tFTFGyYxvF9SIIId6Y1XvvSCB9+/VE+2J7H3r0m9BKIJdIlvalu7f8EmX/jDYw8zuh2cNR2ZrfXI98ZzZ9775FFfixV7IW9cDsESwFAdepYyYJ7pTNe6ovRJOSMzDNYUNtqA48NZv2Zgo0uNIcppjA8F8j3RrTk8O9Ys9cbovBXRLdEb3XRgMPqmaH8WpZVUYBMTpoOQH6NDOy3+KBg/JdqhtuWlF8ys//Krlzc+f/fFPVgOESkjS2P9z9ChoAAdQkVayi6bXkzwmk4PCBVTkr/v6as5Ef1C0+dWEyDE2Ey0UccW9zz/+3bj/PDq1Bcm6uZgH7KbIH22Cvqyi78UxR10OYCHKuCvBWDifIORR0xkBd+NRm9nnHyxlcap7BtIwQrFLJE1LVECwUoGIF4BgyQgL3S0xBsQDOsxYNiSP7njgo70Gjwz7i88vW1LB8L2xb31KLrHk1L48dx/AEAM1Lcf3Z7FidHg6z+1e/UN8HC7yDNB+uqDG4Nn+n23Y4PRfKcvRRC16mEOFis9GgBXQeeEbwmgHUW6qqy4QqW0TtFdTMBvuVY0DfDS+Yv48KGTgPB6SL8Jt0XIz7jb+x3htyvzfYC/Fi7C7DOo4//5h3Nz+MDpo75n8PA/3Lpj/WuIxnFDf++Z/TgwaOPHrz31N3DcKWHWKm2jx7sfGw6Gl0cVJLFnUYGO2QD2EcuGEu28Ij+qklgqVMI7MCwgkj8IQw86UI2FaC9sov2hua8kal7tBflHsurlX15b/rf/uD576KrBKByemzy+5nV7z3AvlpaDfuvcNXgznolLIfIrlxdxulrE6Ub40JmrP/fShY0zY9mPbEV+49vrM8cl8qPXPtqLE/YHhmGo2Pz56g6dHA04k0sLASqrTUaiEgylpqRkcjjAzJ+nzEIC3LnVBsF1B1zLLik1vaYQsGttYrd89On9J0753A/mRq7eRvL1IDj2zjXY8BofevogHJQFcnmQmqrPbuyNn1vfex9l9202ZB0bfP7mE0eOzax/GC1fihgegvSOq+vJ8beePooJiIrKfUFSq4xkBYJwAZ423ymhJT7F/NlYizjXDNA6V0FESUa4LAcx4eszdYt9dcTAIop2ibQganMs9wiZkPSVlMA7BqIkuBz9AC3FCQbyX2zHvdfKBZ/gVpP9yoEwfutC7dpQxdAl87SOWuY+WQGY9iU5qQobYhON25OAg9WIEv8KwlkIEVBMechvLYV4/9GZRuOY1OFEQIVATNUfOugClRo5IxBIBEKBuatLvZ7BKRMRIARTu+3isC06WYG1okFLlSX2mbs5zyQtZDaejhidMm/w8aOP418trBHEaTg+YMI7AMyS+AbAD7CK52fZYiLA6VkVTj10RypUUNKR1eIULZY6mGASPJDi3RVwY4ReKNNxM//Y2VFfZ8c19tb5WQWaU6SrKm2oKXczBMySr5Q7oQnI/dVYL1u+bIF8Tox2A9E+APEVSAV53YDJgxtzuL9ZwGzPC4lIcS1kpSKjUI4Az9BfarWBHFDaduqeiyunXrdz9ef6YTLfr7UdqGYlNLx9dkOPtAtgnQRY7+wBhOe8+LkZt5HbialOBZAiuDUBvJXduXLujh71O4L/pFwvJjgC7dsC2o+fP8QPnjsC9QJmQqa4Qsk5XNE0pmLuSrljifsXJsls6K9tzPPUaC6+cufGsI8Ij5rbWbW8Y+VSuz0EvtssobK8QHIMqiKHdNsvHWpaAMNWCK3j1SuXr+0F/ncBO5IqzGMkbwQoIv7P747mNe4NtGxjdX1R9o51EE+4MjWx3G5kLVNymINEgBnQ6xu+Pxlgs/FqLuiXWsdrGurBfuUfuXV288JnNiHU7IyVbMG0aU7XQ8I1IArw6PrIsVO66/DpHwe00wETGCjrE1gR8LZgXD4028rq3NEraw+lprEIRJn7XtEt5mIuE7JEmUMdQB2kqPYYqHcSeAnlbwH8dVuN4HAEJo0vVwjYFSbMpFmMlhCidWBPmOB5gxE82hYzGNFzu0cGELMww/5eI0WpY7JilvWnkUa7Ulwtza7n+LapfmwULMkTfdOcgAFpLS0Qjv20juHkEU3SNi2VFFc5k+eikBSSqGE0rLY1jPiiwU4xU5w89/La+D9APvv4uAcopgmcUt1AriRdb6usF5e4zhQjESpNpQwCgUB0wODHK2s+V1eTS3Vovg2bfH4dhmhBntZKvSaFcOzF1xUblaFNlqHSo0cReGizh12cbB3ut19y2m4JCwCfrgPetx3tE+956oD+drQDczVQda13zsKco5ak1aJ9F0rVNfQZb8pJKZAbbcXHt/vx1Hj2r78zXvqjR5qFT31rtPL0/97aq2Hoo9JUEqgDwFfddQeT+tGRsK67LubbGJP7fFP/7ehpHhyMGaMWg2E8oQ3f+/h+fH77AA4uOOQR3VwiD+myfVC6vkIs/r8lgBzxMFPr4OVJBbbEeERrIe/1gAmAxYEwVzsCBHgU3CmTZmuiAiAvem4OiLQCUTjn8oxwuZ3lr589gn85s6U5i2sjVvj65iwfnszr4BJhSjOUrm8Ai6vzoK+MG/N5U8hNsSgxJ8UojibCzy2d1RtXLoUBJnUPOEbW/ukLOx79xOU9cbFKsp/kUO7yaUSVJ1dIXUwO4itHOmmkiH6gnmrn+ejaPJQaL5gJK32AHtPmOuG6TOKykRINKyZTLje53BXsSbc0blixEd606zz3aWiCvxmwtxonzU8v4F1fWe3fe2G0pF6fCBagtoV7EuxNqRhTHTKri0RmMHAl9bQOwvyMY77vWBo4FnuZ3MVIeBSVR61d9fesEYEpZyxHmecoy+oKPEOGEn+Fp7aaZpHV66Ow0jp27R401/zpc5/ELy6dx8aETOMDS4XYSTNwKhEXHHB2BDMVxQTmQlkwXU9ArITVOW9V1PIcqplyZ3KWws28wBe7Cavl364obsYe7l1fQAObEPZXkG1Bejy4vgaJqxEIgNJ7ClCZKFWlPb4CXjL+lCl9mkYz1cHUvE0lhVx7O/DNrChX5m40PJVQ01wo51DBNSYC1wKMMG0j4F1PHNK9cwv2ieuf+H3S/w4K6+e37fSvPnFIT9TLmB8o99FFXgbCsZdcVz5f4RqUqp1pdhG4y0elvYAsHfq00pfeVEgqiTKM/LN5RC4Oqf9V/rVRa5xji9v7m7h20ODEaAZntoPv7PnTY6tW71lf1he2d2FlPqROidNYqWpMR+fdgCq9MwCC6TWWtOvii+KEdFACTiErzUnOypVSRd9NPk1+osorMsVYKggaRW5F6ddWfsifWXr2FlT204D94+tOXPfFu09cFa8atFSf2LNoYBqcX5EZjshymBQAlKV47t4uKDNqQ3Zp8Vw2bibWKjGV8JXqKk03b0224fQtjOTkpNBHkWMSlYQDHA8g+/eTGF5U++RlR2aar5/uLT7brw10CXCWt2fQ5SzBCFTTlo0pPVTYczcQQ7FkOcsUMPJvKEvYMMg0TRBSnot+F8Xd8FfYdsMkBowgDKOwNa55GT0HtjYVg8PN6Wl8acqpnl446DJ2isLIjCAnSp7gME/BMsqye4+ofC7vEqSLuXDn2qGpR5BeuEKhmYKnZScCgkf8u+UL4YZq60ekuHcccfxS23v6YD82QvXHJhqM3wj0tfSOGNC9zpH3nGO3a50rwKdtk3IFt/JFmTZe+SaLl0wuNDtz+/wPu8At08Vu4TLwGkXi+rrBm1fOX22u9yC2cwAeAvTebYQNUQ9UoX3nmbaePBFnfBAchJfoRskzwuFwkaA7UIkO0tDNcTIQlddtLEeGo3ijMFEvfHA6J4GDZt1IOKN5VxplkORoZZizFh5VuSxANoG0VJnV31xf0F9u7USvVnNy1NP5agazlcBYjFrmh7nOyfMEzVCBlhqAJOnC8qiNyKFp0BQQEv9SnqsWGSk5JcWxtYm4CFOML0eNABgMdOHiWsTmrnBqLvhvO3XILD7QOlfvXe3pC/EAVhBY98cccAzEqKg0mbZi6Oxmz+0LHfh/ipSQfRTAk3QAAAAASUVORK5CYII=",
    status: "Active",
    expiry: "May 28, 2027"
  },
  {
    title: "Google Project Management",
    issuer: "Google",
    date: "2025",
    credentialId: "NRZBXMBUYY7T",
    description: "Advanced proficiency in Google Analytics including data analysis, conversion tracking, and reporting.",
    skills: ["Project Execution", "Project Planning", "Project Management Life Cycle", "Agile Project Management"],
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/NRZBXMBUYY7T",
    logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/61/36584e2633455296817e987d653e8d/500x500_Google.jpg?auto=format%2Ccompress&dpr=2&w=75&h=75&fit=crop",
    status: "Active",
    expiry: "N/A"
  },
  {
    title: "Google Advanced Data Analytics",
    issuer: "Google",
    date: "2025",
    credentialId: "TQ7EBXK3BGLX",
    description: "Developed core project management skills including Agile, Scrum, risk management, and stakeholder communication through hands-on, industry-relevant training.",
    skills: ["Python", "Statistics", "Machine Learning", "Data Analysis"],
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/TQ7EBXK3BGLX",
    logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/61/36584e2633455296817e987d653e8d/500x500_Google.jpg?auto=format%2Ccompress&dpr=2&w=75&h=75&fit=crop",
    status: "Active",
    expiry: "N/A"
  }
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 underline underline-offset-8" style={{ color: '#3A0CA3' }}>Certifications & Credentials</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate my expertise across product management, analytics, and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {certifications.slice(0, 3).map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-effect rounded-xl p-6 hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <h3 className="text-lg font-bold text-center" style={{ color: '#3b82f6' }}>{cert.title}</h3>
                <Button
                  size="sm"
                  className="w-full border-2"
                  style={{ backgroundColor: 'transparent', borderColor: '#FFD166', color: '#666' }}
                  asChild
                >
                  <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Verify Credential
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            All certifications are current and can be verified through the issuing organizations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}