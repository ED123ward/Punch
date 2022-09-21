import React, { Component } from "react";
import { useParams } from "react-router-dom";

import styles from "./agreement.module.scss";

export default class agreement extends Component {
  state = {
    type: "all",
  };

  componentDidMount() {
    const query =
      window.location.href.split("?type=")[1] == undefined
        ? ""
        : window.location.href.split("?type=")[1];

    this.scrollToAnchor(query);
  }

  scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  };

  render() {
    return (
      <div  className={styles.agreementPage}>
        <div id="all" className={styles.title}>Terms and Conditions of Service</div>
        <div>
          Welcome to Punch Games! We hope you’ll enjoy being a part of our
          community by participating in online gaming challenges, competitions
          and tournaments and using other applications, tools and services.
        </div>
        <div>
          BY REGISTERING FOR AN ACCOUNT WITH US (your “Account”), USING THE
          SERVICES IN ANY WAY, CLICKING “I ACCEPT” BELOW, DOWNLOADING ANY
          APPLICATION INTEGRATED WITH PUNCH GAMES, OR REGISTERING FOR OR
          PARTICIPATING IN ANY COMPETITIONS, YOU: (A) ACKNOWLEDGE THAT YOU HAVE
          READ THESE TERMS AND CONDITIONS OF SERVICE AND ALL OBLIGATIONS AND
          RULES THAT MAY BE INCLUDED WITHIN EACH COMPETITION IN WHICH YOU
          PARTICIPATE (“Rules”) (these Terms and Conditions of Service, the
          terms of any policy incorporated herein, and the Rules are
          collectively referred to as the “Terms”) IN THEIR ENTIRETY; (B) AGREE
          TO BE BOUND BY THE TERMS; AND (C) ARE AUTHORIZED AND ABLE TO ACCEPT
          THESE TERMS. If you don’t wish to be bound by the Terms, do not click
          “I accept” and do not register with Punch Games (“Punch Games”, “we”
          or “us”) and do not use the Services. Declining to accept these Terms
          means you will be unable to participate in Competitions or use your
          Punch Games account.
        </div>
        <div className={styles.pram}>1. GENERAL TERMS</div>
        <div>
          1.1. ARBITRATION. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE
          LAW, ANY CLAIM, DISPUTE OR CONTROVERSY OF WHATEVER NATURE (“CLAIM”)
          ARISING OUT OF OR RELATING TO THESE TERMS AND/OR OUR SOFTWARE OR
          SERVICES MUST BE RESOLVED BY FINAL AND BINDING ARBITRATION IN
          ACCORDANCE WITH THE PROCESS DESCRIBED IN SECTION 14 BELOW. PLEASE READ
          SECTION 14 CAREFULLY. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE
          LAW, YOU ARE GIVING UP THE RIGHT TO LITIGATE (OR PARTICIPATE IN AS A
          PARTY OR CLASS MEMBER) ALL DISPUTES IN COURT BEFORE A JUDGE OR JURY.
        </div>
        <div>
          1.2. Changes to the Terms. We may amend, change, modify or revise the
          Terms at any time, and we may post a notice on our website at
          (“Website”) of any material changes, and you can see when these Terms
          were last revised by referring to the “Updated” legend above. Your
          continued participation in Competitions and/or use of Software or
          Services means you accept any new or modified Terms. You are
          responsible for reviewing the Terms for any changes, so please check
          back here from time to time
        </div>
        <div>
          1.3. Eligibility. You may not modify these Terms except in writing
          signed by both you and Punch Games. For purposes of these Terms,
          “writing” does not mean an email nor an electronic/facsimile
          signature.
        </div>
        <div>
          1.3.1. United States (U.S.). To be eligible to register an Account, to
          participate in any Competition or receive Services, and/or to download
          Software, you must: (a) be a natural person who is at least 18 years
          of age or older, and who is personally assigned to the email address
          submitted during your Account registration; (b) have the power to
          enter into a contract with Punch Games; (c) be physically located
          within the U.S. when accessing your Account and participating in
          Competitions; (d) be physically located within a U.S. state in which
          participation in the Competition you select is unrestricted by that
          state’s laws; and (e) at all times abide by these Terms. If any one of
          these requirements is not met at any time, we, as agent for our
          developer partners, may suspend or close your Account with or without
          notice.
        </div>
        <div>
          1.3.2. Non-U.S. To be eligible to register an Account, to participate
          in any Competition or receive Services, and/or to download Software,
          you must: (a) be a natural person who is at least 18 years of age or
          older, and who is personally assigned to the email address submitted
          during your Account registration; (b) have the power to enter into a
          contract with Punch Games; (c) be physically located in a jurisdiction
          in which participation in the Competition you select is permitted and
          unrestricted by that state or country’s laws; and (d) at all times
          abide by these Terms. If any one of these requirements is not met at
          any time, we, on behalf of our developer partners, may suspend or
          close your Account with or without notice.
        </div>
        <div>
          1.4. Registration. When you create an Account, you will be asked for a
          legitimate email address that you control and to create a password.
          After registration, you will be given the opportunity to create a
          username or accept a username given by the Services. The password and
          username are needed to participate in the Services. As a registered
          user, you can update your account settings, including your email
          address, by logging into your Punch Games Account inside any Punch
          Games-enabled game and clicking “Account Settings”. Also, if you
          forget either your password or username, you can visit the Website or
          email us for help. Please keep your username and password secret
          because you are responsible for all activity in your Account. Although
          we may offer a feature that allows you to “save” or “remember” your
          password, this feature makes it possible for third parties to access
          your Account, so please use that feature prudently because such use is
          at your own risk. We may, in our sole discretion, reject, change,
          suspend and/or terminate your username.
        </div>
        <div>
          1.5. Your Account. As the holder of your Account, you are solely
          responsible for complying with these Terms, and only you are entitled
          to all benefits accruing thereto. You may not allow any other person
          to (i) access your Account; (ii) access Services or Software through
          your Account; or (iii) accept or use prizes, winnings and other
          representative of value (including without limitation digital
          trophies, virtual currency or virtual goods) (collectively
          “Winnings”). Neither your Account nor Winnings nor any Digital Assets
          (defined in Section 10.3) are transferable to any other person or
          account. You must immediately notify us of any unauthorized use of
          your password or identification or any other breach or threatened bre
        </div>
        <div>1.5.1 Activation</div>
        <div>
          To participate in games, the user must have previously, at the start
          of any game, formalized these Terms and Conditions, having expressly
          accepted, likewise, the Privacy Policy and Cookie Policy. In addition,
          prior to the start of participation in any game, the User must 
          successfully complete the user registration process established on the
          Platform (user registration being understood as the only registration
          that allows the User to access, as a participant, the Punch Games
          Services offered through the Platform), in accordance with the
          following specialities: Participation without real money: when
          accessing an Punch Games video game for the first time, the Platform
          will ask the User for a username and to enter and validate an e-mail
          address and password. After this process, a tutorial will start. From
          this moment, the User will be able to play video games, even without
          having validated the e-mail address, only by playing games with
          virtual money ("GGs"), until they are used up. Participation with real
          money: in order for the User to participate in the video games or, if
          applicable, to challenge another user, using in any case real money,
          it will be necessary to make a deposit of funds. In addition to the
          information mentioned in point a) above, the Platform will ask the
          User for their date of birth and the details of their bank card to
          proceed with the deposit of funds in their User Account. In any case,
          in order to proceed with the deposit of funds it will be necessary for
          the User to validate the e-mail address provided at registration. The
          deposit methods that the User can use to deposit funds are included on
          the Platform, in the section "Payment Methods", and can only be used
          under the conditions established in that section. Participation with
          real money in competitions: in order to participate in competitions
          organized by the Platform, the User must make the corresponding
          deposit of funds in their User Account, fulfilling the prerequisites
          established in points a) and b) above.
        </div>
        <div>1.5.2 Your username and password</div>
        <div>
          In the event of loss or forgetting the username and/or password, the
          User may, through the Platform, request a change of password. Once
          this option is requested, the User will receive an e-mail at the
          address provided to proceed with changing the password. In the event
          that the User has not provided an e-mail address as detailed in the
          previous section, he/she must contact Punch Game Customer Service in
          order to recover his/her username and/or password. The chosen username
          may be modified, free of charge, once. In case of second or subsequent
          modifications, its modification must be requested from the Platform,
          against payment. In the event that the chosen username is or contains
          offensive language, Punch Games will contact the user through the
          associated e-mail address requesting an immediate change in the
          username, if after 24 hours the user does not make any changes the
          account will be deactivated. The User will be responsible for
          maintaining the confidentiality of their username and password, as
          well as all transactions and movements of their User Account. The User
          shall be responsible for maintaining the confidentiality of his/her
          username and password, as well as for all transactions and movements
          on his/her User Account. The User is solely and exclusively
          responsible for the custody of his/her password and for its personal
          and non-transferable use, and shall be liable for any use, authorised
          or unauthorised, by third parties, exonerating Punch Game from any
          liability that may arise from use made in the User's name.
        </div>
        <div>1.5.3. Single account</div>
        <div>
          Only a single active user registration is allowed. The User may not
          have more than one active User Account on the Platform. Before
          registering another different User Account, the User must  cancel the
          previous one. The User Account is personal and non-transferable, and
          reflects the economic transactions linked to the participation and use
          of the Punch Game Services offered by the Platform and any other
          additional services offered by Punch Games. Punch Games reserves the
          right to cancel all accounts associated with the same user. The
          transfer of funds between several accounts using the social function
          of the platform will mean the automatic closure of all associated
          accounts.
        </div>
        <div>1.5.4. Access to the User Account by third parties</div>
        <div>
          In the event that the User has suspicions that the User Account may be
          being hijacked, he or she must contact Punch Game to proceed with its
          blocking and, where appropriate, proceed to change the password. In
          the event of any suspicion that the password may have been disclosed
          to third parties, Punch Game recommends that it be changed
          immediately. In any case, for security reasons, it is recommended to
          change your password from time to time. Punch Games reserves the right
          to prevent the opening of a User Account when the holder of the User
          Account is not the User himself/herself, or to suspend the User
          Account (in the event that it has been successfully opened) and to
          withhold the balance that may be held in it. In the event that there
          are indications of suspicion that the User Account is being used by
          someone other than the person listed in the registration, or that it
          is being used in a fraudulent manner, Punch Games may cancel the User
          Account if there are sufficient indications of fraudulent or illicit
          use of the User Account. Punch Games is not responsible for the access
          of third parties to the User Account and under no circumstances will
          it assume responsibility for any loss, costs, claims, expenses and
          damages that the User may incur as a result of the unauthorized use of
          the User Account by any another person, or as a result of unauthorized
          access to the User Account. In this sense, all transactions where the
          username and password appear correctly will be considered valid,
          whether they have been authorized by the User.
        </div>
        <div>1.5.5. Voluntary closure of the User Account</div>
        <div>
          The User may request the temporary or permanent closure of their User
          Account. The voluntary closure period will be determined by the User,
          notifying the Punch Games Customer Service. In the event that the User
          requests the permanent closure of the User Account, it may not be
          reopened.
        </div>
        <div>1.5.6. Minimum age</div>
        <div>
          Access to the Platform is prohibited to anyone under 18 years of age.
          Therefore, by accepting these Terms and Conditions, the User declares
          and acknowledges that he/she is over 18 years of age and has reviewed
          these Terms and Conditions and agreed to them and to the use of the
          Platform. Notwithstanding what is stated above, Punch Games reserves
          the right to request documentary proof of your identity and age by
          whatever means we deem appropriate. In this regard, in the event that
          Punch Game requests the User to provide the aforementioned documentary
          evidence and does not send the required documentation within one (1)
          month, Punch Game will proceed to cancel the User's registration and
          User Account. Consequently, (i)  (a) if the User Account balances are
          higher than the amounts deposited, Punch Game shall only refund the
          latter; (b) if the User Account balances are lower than the amounts
          deposited, Punch Games shall refund the amount of the balance that was
          credited to the User Account; and (ii) if the documents are inaccurate
          or have been altered or manipulated, Punch Game shall not be obliged
          to accept these documents as valid. In the event that point (ii) above
          applies, Punch Game reserves the right to suspend the User's Account,
          prohibit the User from participating in the Platform's video games and
          withhold all funds from the User's account, when there is evidence of
          falsification and the sending of forged, stolen or inappropriate
          documents.
        </div>
        <div>
          1.6. Personal Location Data: As a part of this service, on behalf of
          our developer partners, we collect location information from your
          device. If you would like to opt out of having this information
          collected, you can disable location access to any game with the Punch
          Games SDK through the Settings menu on your mobile device.
        </div>
        <div>
          1.7. Use of Information Collected: By upgrading an account and
          providing an email address, users authorize Punch Games to provide
          them with important announcements, relevant promotions, and other
          related communications relating to the Service, Software and
          Competitions. Users will always have the opportunity to opt out of
          these communications at any time.
        </div>
        <div>
          1.8 Employee Policy: Punch Games employees may use the Services and/or
          Software for the purpose of testing the user experience, but may not
          withdraw money. Punch Games directors, contractors, affiliates, or
          partners may use the Website, Services and/or Software without such
          limitation, but only if they do not have any access to non-public
          information relating to the Services and/or Software that would lead
          to any advantage in their play using the Services and/or Software.
        </div>
        <div className={styles.pram}>2. SERVICES AND SOFTWARE</div>
        <div>Notice about our services</div>
        <div>
          Punch Game reserves the right, with or without prior notice, to
          modify, suspend or terminate the User's access to the Platform for the
          following reasons (i) for technical reasons (such as technical
          difficulties experienced by Punch Game or the Internet); (ii) to
          improve the User's experience; (iii) when Punch Games has legal
          reasons to do so; (iv) in the event that it no longer makes commercial
          sense for Punch Game to provide the corresponding part of the Platform
          or; (v) in the event that Punch Games modifies the services or video
          games it provides. In the event that Punch Games has indications that
          the User has engaged in collusive or fraudulent behaviour in the use
          of the Punch Games Services offered through the Platform, it may
          provisionally suspend the User until the incident is clarified. In the
          event that Punch Game has sufficient evidence to be able to consider
          that the User has committed fraud, collusion, has made its own User
          Account available to third parties or has in any way violated the
          Terms and Conditions, Punch Game may transfer the User to present the
          allegations it deems appropriate and, after analysis, Punch Games may
          unilaterally terminate these Terms and Conditions. In  this case, Punch
          Game reserves the right to close the User Account, and to retain all
          funds deposited in the User Account.
        </div>
        <div>
          2.1. The Services. On behalf of our developer partners, we may, with
          or without notice to you: (1) modify, suspend or terminate your access
          to the Website, Services and/or Software for any reason without
          liability; and (2) interrupt the operation of the Website, Services
          and/or Software as necessary to perform maintenance, error correction,
          or other work. As agent for our developer partners, we may suspend
          and/or close the account of any user who violates, or whom we
          reasonably believe may be in violation of or will violate, these
          Terms, at any time without notice and without liability. Also, and
          without limiting our other rights or remedies, if we believe you have
          violated these Terms or if you have violated these Terms, as agent for
          our developer partners, we may determine that your Winnings, if any,
          will be forfeited, disgorged or recouped.
        </div>
        <div>
          2.2. Software. If you wish to participate in Competitions or receive
          Services, you may be required to first download certain mobile
          applications from our third-party developer partners which have
          integrated Punch Games’s SDK (together with the content included
          therein, any associated documentation, and any application program
          interfaces, license keys, and patches, updates, upgrades,
          improvements, enhancements, fixes and revised versions of any of the
          foregoing, is collectively “Software”). If you do not download the
          Software, you will not be able to participate in Competitions or
          receive relevant Services. Whether you download the Software directly
          or from a third party, such as via an app store, your use of the
          Software is subject to these Terms.
        </div>
        <div>
          2.3. Remote Access and Updates. We and/or our developer partners
          choose to offer technical support for Software from time to time in
          our discretion. Such technical support may require that we or our
          developer partners remotely access your device on which the Software
          is installed (“Device”). Also, if and when our developer partners
          update the Software or deploy patches, updates, and modifications to
          the Punch Games SDK integrated into the Software, as applicable, we
          may do so through remote access of your Device without your knowledge.
          You hereby consent to these activities. You acknowledge that if we or
          our developer partners cannot remotely access your Device, then the
          Software may no longer work, and this may prevent you from
          participating in Competitions or otherwise receiving Services. We
          and/or our developer partners’ access to your Device will be limited
          solely to (i) providing support (ii) updating the Software or (iii)
          determining your location for skill-gaming regulatory purposes only,
          and is governed by the terms of our Privacy Policy.
        </div>
        <div>
          2.4. Beta Releases. For any Service that is identified by us or our
          developer partners as a “beta” version (“Beta Service”), you
          acknowledge and agree that a Beta Service may contain more or fewer
          features than the final release of the Service. We and our developer
          partners reserve rights not to release a final release of a Beta
          Service or to alter any such Beta Services’ features, specifications,
          capabilities, functions, licensing terms, release dates, general
          availability or other characteristics. Beta Services may not be
          suitable for production use and may contain errors affecting proper
          operation and functionality.
        </div>
        <div>
          2.5. Third Party Sites. You may be able to access third-party websites
          or services via the Software, Services or Website. We are not
          responsible for third-party websites, services, or content available
          through those third-party services. You are solely responsible for
          your dealings with third-parties (including advertisers and game
          developers). Your use of third-party software, websites or services
          may be subject to that third-party’s terms and conditions.
        </div>
        <div>2.6. Blocking, cancellation or error of a game</div>
        <div>
          The sessions of each game may be paused for one (1) hour, forcing an
          automatic pause of the session in case the User leaves the application
          voluntarily or involuntarily (due, among other causes, for reasons
          derived from any technical failure, loss of coverage, empty battery,
          etc.). In case of loss of Internet connection for any reason (loss of
          coverage, depleted battery, etc.), the result of the game cannot be
          sent to the server. In this case, the final result of the User's game
          will be the last score sent to the server before the disconnection
          occurred. If the User has not finished the game or has not been able
          to upload the score to the Services and/or the Punch Game server, the
          result will correspond to the last score received by the server (the
          result being equivalent to zero (0) if the User has not been able to
          send any score to the Services and/or the Punch Games server), the
          winner being the User whose score registered with the server, in
          accordance with the provisions of this clause, is higher. If the User,
          having passed a round (or having drawn for the first time in the same)
          in a bracket tournament, does not complete the next game in the
          stipulated time, he will lose the right to a prize or refund in that
          tournament. Without prejudice to what is stated in this Clause, Punch
          Games will not be responsible in any case for any disconnections or
          exits of the User's application caused by reasons attributable to the
          same, which the User acknowledges and accepts that may cause the
          impossibility of the result of the game is sent to the server, being,
          therefore, the result of the same equivalent to zero (0). If a
          competition is not completed by the corresponding ticket
          mini-equivalent to the prize awarded, the tournament may be cancelled
          by returning the full ticket fees to all participants in the
          competition.
        </div>
        <div>2.7. Links</div>
        <div>
          Punch Game declares that it may include links to third-party websites
          and services on the Platform. The User accepts that he or she does not
          have control over the content and services of said third parties, that
          they may have their own terms and conditions and that they are not
          endorsed by Punch Game, so that Punch Game will in no case respond to
          the User for losses or damages that said third parties could cause.
          Any damage or expense caused to the User in relation to said third
          parties will be the responsibility of the User. In this regard, the
          User declares, acknowledges and guarantees that he/she is aware that
          when he/she provides data to third parties, he/she is providing it
          according to the privacy policy (if any) of those third parties, and
          that the Punch Game Privacy Policy does not apply in relation to that
          data.
        </div>
        <div>2.8. Absence of guarantees</div>
        <div>
          Punch Game does not assume any responsibility for guarantees, explicit
          or implicit, related to the platform, which is provided to the User
          "as is", and is provided without guarantee and without any
          responsibility regarding its quality, fitness for use, integrity or
          precision. Although Punch Game will make its best efforts to provide
          you with a service of the highest quality, reliability and security,
          Punch Games does not guarantee that the Punch Games Services (Website,
          Platform, Software, services, video games, etc.) will function
          uninterruptedly, punctual or error-free. Likewise, Punch Games does
          not guarantee that the Platform is free from viruses, bugs or other
          defects, and will use its best efforts to take all reasonable measures
          to ensure the continuity of the Punch Game service. Access to the
          Website and/or the Platform may be temporarily limited when
          maintenance, updating or similar tasks require it.
        </div>
        <div className={styles.pram}>3. COMPLIANCE WITH LAWS</div>
        <div>3.1. Prohibited US States/Countries.</div>
        <div>
          You acknowledge that various rules, regulations and laws addressing
          sweepstakes, contests, and tournaments with entry fees and/or prizes
          govern your participation in Competitions (“Gaming Laws”), and that
          Gaming Laws are set up by each individual US state, country,
          territory, or jurisdiction. Therefore, the Software DOES NOT permit
          Cash Competitions (as defined in section 8.3) to be offered to users
          participating in Competitions in any state in which such Competition
          violates its Gaming Laws (“Prohibited Jurisdiction”), and if you are
          located in any Prohibited Jurisdiction then you may not participate in
          Cash Competitions. In the United States, Prohibited Jurisdictions, as
          of the “Updated” date above, include: Arizona, Arkansas, Connecticut,
          Delaware, Louisiana, Montana, South Carolina, South Dakota, and
          Tennessee. For card games, Prohibited Jurisdictions include Maine and
          Indiana. The offer of services offered by Punch Games through its
          Website or the Platform is not directed to countries in which this
          type of services is prohibited, additional requirements are demanded
          or their advertising is restricted. In this regard, access and/or use
          by foreign users of the Platform and/or the Services offered by Punch
          Games may be limited in the event that restrictions on gambling are
          established by the Government of the corresponding country to
          foreigners that prevent or avoid access to the Services by foreign
          participants. In relation to the above, the services offered by Punch
          Games through its Website or the Platform may be limited in the event
          that access and/or use of the same occurs by users who are in
          territories such as (by way of example but not limitation)
          Afghanistan, Belarus, Bulgaria, Democratic Republic of Congo, Ivory
          Coast, China, Cuba, Egypt, France, French Guiana, French Polynesia,
          French Southern Territories, Greece, Indonesia, Iran, Islamic
          Republic, Iraq, Italy, Japan, Lithuania, Macedonia, Malaysia, Myanmar,
          Nigeria, North Korea, Pakistan, Romania, Russian Federation, Sudan,
          Syrian Arab Republic, Turkey, Ukraine, Vietnam, Zimbabwe.It is your
          responsibility to determine whether the state, country, territory or
          jurisdiction in which you are located is a Prohibited Jurisdiction.
          Together with our developer partners, we reserve the right (but have
          no obligation) to monitor the location from which you access Services,
          and on behalf of our developer partners, we may block access from any
          Prohibited Jurisdiction. Each time you log in to participate in a Cash
          Competition, you must accurately confirm the location from which you
          are playing.
        </div>
        <div>
          3.2. Additional Laws. In addition to Gaming Laws, you are also subject
          to all municipal, state and federal laws, rules and regulations of the
          city, state and country in which you reside and from which you access
          and use Services, including without limitation U.S. export laws
          (together with Gaming Laws, the “Applicable Laws”). You are solely
          responsible for your compliance with all Applicable Laws. Access to
          Competitions may not be legal for some or all residents of, or persons
          present in, certain jurisdictions. SERVICES AND COMPETITIONS ARE VOID
          WHERE PROHIBITED OR RESTRICTED BY APPLICABLE LAWS. Your participation
          in Competitions is at your own risk, and you agree not to hold us
          responsible or liable if Applicable Laws restrict or prohibit your
          access or participation.
        </div>
        <div>
          3.3. LEGAL DISCLAIMERS. WE MAKE NO REPRESENTATIONS OR WARRANTIES,
          EXPRESS OR IMPLIED, AS TO THE LAWFULNESS OF YOUR PARTICIPATING IN ANY
          COMPETITION OFFERED BY OUR DEVELOPER PARTNERS OR USE OF SERVICES, NOR
          SHALL ANY PERSON AFFILIATED, OR CLAIMING AFFILIATION, WITH US HAVE
          AUTHORITY TO MAKE ANY SUCH REPRESENTATIONS OR WARRANTIES.
        </div>
        <div className={styles.pram}>
          4. YOUR REPRESENTATIONS AND WARRANTIES TO US
        </div>
        <div>
          You represent and warrant to us that (1) you have the right,
          authority, and capacity to agree to these Terms, to register for an
          Account, and to participate in those Competitions for which you
          register; and (2) you will comply with these Terms when participating
          in Competitions, receiving Services, and/or using Software; and (3)
          all information you supply to us or our developer partners is
          complete, accurate and current (and knowingly submitting incomplete or
          inaccurate information, or failing to update and maintain current,
          complete and accurate information, may result, without limitation, in
          immediate termination of your Account and forfeiture of Winnings).
        </div>
        <div className={styles.pram}>5. YOUR INDEMNIFICATION OF US</div>
        <div>
          You will, at your own cost and expense, indemnify and hold us and our
          directors, officers, employees and agents harmless from and against
          any and all claims, disputes, liabilities, judgments, settlements,
          actions, debts or rights of action, losses of whatever kind, and all
          costs and fees, including reasonable legal and attorneys’ fees,
          arising out of or relating to (i) your breach of these Terms; (ii) any
          use of your Account, the Website, the Software and the Services by any
          person including yourself; (iii) your violation of Applicable Laws;
          and/or (iv) your negligence or misconduct; and, if we instruct you in
          writing, you will, at your cost and expense, defend us from any of the
          foregoing using counsel reasonably acceptable to us.
        </div>
        <div className={styles.pram}>6.Obligations of the user</div>
        <div>6.1. Obligations of conduct</div>
        <div>
          The User agrees not to upload, communicate, transmit or otherwise make
          available content in the available chats or elsewhere on the Platform:
          (i) which is or may reasonably be considered to be illegal, harmful,
          harassing, defamatory, libellous, obscene or otherwise objectionable;
          (ii)  which is or may reasonably be considered to be an infringement of
          other people's privacy; (iii) which is or may reasonably be considered
          to incite violence or racial or ethnic hatred; (iv) which you are not
          entitled to legally provide (such as information which is privileged,
          proprietary or confidential); (v) which infringes any intellectual
          property right or any other proprietary right of any third party; (vi)
          which contains software viruses or any other computer code, files or
          programs designed to interrupt, destroy or limit the functionality of
          the Platform or any computer software or hardware or
          telecommunications equipment, or which consists of unsolicited or
          unauthorized advertising, promotional materials, junk mail, spam,
          chain letters, pyramid schemes or other forms of solicitation.
          Likewise, the User declares, guarantees and agrees that: (i) he/she
          will not carry out a conduct that could damage the reputation of Punch
          Games; (ii) there is a risk of losing money by participating and/or
          using the Punch Games Services and you agree to be fully responsible
          for such losses; (iii) the use of the Punch Games Services is made at
          your sole risk and responsibility for what is left to your entire
          personal and individual decision; (iv) in relation to their losses,
          the User may not make any claim against Punch Games or its partners,
          directors, managers, executives or employees, without prejudice to the
          possibility of filing the corresponding complaints and claims with the
          Customer Service of Punch Games; (v) the origin of the funds that are
          deposited in the User Account for the use of the Punch Games Services
          is not illegal and that under no circumstances will you use the Punch
          Games Services as a deposit or money transfer system, also committing
          yourself to not use the Punch Games Services for any illegal, illicit
          or fraudulent activity. In accordance with the foregoing, if Punch
          Games suspects that a User is, or has been, part of a fraudulent,
          illegal activity or detects suspicious behaviour in relation to money
          laundering activities, or if the User proceeds in such a way as to
          breach the these Terms and Conditions, your access to the Punch Games
          Services may be immediately cancelled and/or your User Account
          blocked, in accordance with the provisions of these Terms and
          Conditions (without prejudice to the internal investigation actions
          that Punch Games may carry out, or exercise the legal actions that the
          parties may be entitled to).
        </div>
        <div>6.2. Prohibitions</div>
        <div>
          Illustratively, and without being exhaustive, it is prohibited:
          disguise, render anonymous or hide your IP address or the origin of
          any content you may upload; remove or modify any trademark notices or
          other proprietary rights information appearing on the Platform; cause
          interference or disruption to the Platform, servers or networks
          through which the Platform is provided; attempt to decompile, reverse
          engineer except as permitted by applicable intellectual property law,
          disassemble or hack the Platform, or circumvent or defeat our
          encryption technologies or security measures or the data we transmit,
          process or store; collect, extract or compile any information about
          the Platform or other users who use the Platform, including, without
          limitation, personal information or data (for example, by uploading
          any information-gathering elements such as pixel tags, cookies,
          graphical exchange formats (GIFs) or similar elements, among others,
          sometimes known as "spyware" or "pcm (passive collection mechanisms);
          using the Platform to harm, offend or harass someone; creating more
          than one account to use the Platform; using another person's or
          entity's e-mail address to register; using the Platform for fraudulent
          or abusive purposes (including, but not limited to, using our services
          to impersonate a person or entity, or otherwise misrepresenting the
          relationship with a person, entity, our forum or our video games);
          selling, transferring or attempting to sell or transfer an account you
          have with us or any part of an account; disobeying the requirements or
          regulations of any network connected to the Platform; using the
          Platform in a fraudulent manner by competing or practising falsely for
          the incorrect categorization of the user's level by the Platform and
          gaining a competitive advantage over opponents; using the Platform in
          any other way that is not permitted by these Terms and Conditions or
          the rules of the video games, which Punch Games may gradually publish
          in accordance with these Terms and Conditions. use the Platform to
          violate any law or regulation in force, use any type of game mechanism
          or automation that edits the scores or provides a competitive
          advantage to any user, or use the Platform in any other way that is
          not permitted by these Terms and Conditions. Punch Games will
          communicate with special attention any operation or pattern of
          complex, unusual or without an apparent economic or legal purpose, or
          which presents signs of simulation or fraud and, if appropriate, will
          communicate the signs and/or elements of judgment collected to the
          Executive Service of the Commission for the Prevention of Money
          Laundering and Monetary Offences.
        </div>
        <div id="position" className={styles.pram}>
          7. PRIVACY
        </div>
        <div>
          7.1. Privacy Policy. We are committed to your privacy, and our Privacy
          Policy, the terms of which are incorporated into these Terms as if set
          forth in their entirety, explains the policies put in place and used
          by us to protect your privacy as you visit the Website, participate in
          Competitions, download and use the Software and receive Services, and
          its terms are made a part of these Terms by this reference. We
          receive, store and use all information that you submit to the Website
          and all information you submit in registering for and participating in
          Services, in accordance with the Privacy Policy, so please read it
          carefully. We also collect anonymous aggregated and/or statistical
          data reflecting your use of the Website and Services and may use such
          data for tracking, reporting and other activities in connection with
          our business, also all in accordance with the Privacy Policy. We will
          not intentionally disclose any personally identifying information
          about you (including information submitted in creating an Account,
          your social security number, your email address, phone number, or
          passport, information obtained by the Website from cookies, and
          information regarding your IP address) to third parties without your
          consent except (1) where expressly specified in these Terms, (2) where
          expressly specified in the Privacy Policy, and/or (3) where we, in
          good faith, believe such disclosure is necessary to comply with
          Applicable Laws, to enforce these Terms against you, or to help
          prevent a loss of life or physical injury or crime.
        </div>
        <div>
          7.2. Communications with You. As also detailed in the Privacy Policy,
          we may use emails, text messages, and push notifications to notify you
          when you win our developer partners’ Competitions, when a Competition
          you have entered has completed, and to let you know of special
          promotions, events and policy changes. We may also communicate with
          you via email, text message, push notification or chat for any other
          purpose relating to Services or Software. We or our representatives
          may monitor all communications made by or received by you while using
          the Website and Services. If you do not wish to receive these
          communications from us, you may opt out by emailing
          contact@punch.games, but you acknowledge that opting out may result in
          your inability to participate in our developer partners’ Competitions
          or receive Services.
        </div>
        <div>
          7.3. Device Information. Using the Software and Services requires an
          Internet connection to our servers, and we (on behalf of our developer
          partners) or our developer partners may need to collect certain
          information from you and your Internet-enabled device (“Device”) in
          order to make the Software and Services available to you, such as
          hardware system profile data, internet connection data and any other
          data related to the operation of the Service from any Device that logs
          onto the Service using your Account. We will use this information in
          accordance with the Privacy Policy.
        </div>
        <div>
          7.4. Warning. Please take care in sending us sensitive information
          because third parties can unlawfully intercept or access transmissions
          or private communications between you and us, and you acknowledge that
          internet transmissions are never completely private or secure. For
          your safety, you should never reveal any sensitive personal
          information in any Punch Games-enabled public forums, message boards
          or chat features.
        </div>
        <div>
          7.5. Promotional Activities. By registering for an Account, you allow
          us and/or our developer partners to publicly display your username and
          tournament records, and to use this information for any purpose. By
          using the Services, you allow us and our developer partners to print,
          publish, broadcast and use, worldwide, in any media and at any time,
          your name, picture, voice, likeness, and/or any biographical
          information that you submit to us or our developer partners
          (“Biographical Information”) for promotional, marketing or related
          business purposes, without compensation to you. However, we will never
          sell your Biographical Information without your prior written consent,
          and our use of your personally identifiable information is always
          governed by our Privacy Policy.
        </div>
        <div>
          7.6. Gameplay Dialogue. On behalf of our developer partners, we may
          use third party websites and technologies to record or stream gameplay
          or chat dialogue occurring through the Services, including your own
          dialogue (“Recordings”). We use Recordings to verify compliance with
          these Terms and as part of marketing and promotion of the Services.
          Please do not submit personally identifiable information in gameplay
          dialogue—this information is available for anyone to see and use. You
          may record and distribute your own recordings of gameplay dialogue for
          non-commercial purposes (i.e., you may not record or distribute
          Recordings for compensation) so long as your recording and
          distribution: (a) do not include other products or services that are
          competitive with the Services, and (b) comply with these Terms.
        </div>
        <div>
          7.7. Children. The Services will not knowingly accept personal
          information from anyone under 18 years old. If you believe that a
          child under 18 has gained access to the Services, please contact us at
          contact@punch.games. On behalf of ourselves and our developer
          partners, we have taken commercially reasonable steps to restrict use
          of Services to those who are at least 18 years old. As agent for our
          developer partners, we do not sell products or services for purchase
          by minors.
        </div>
        <div className={styles.pram}>8. ACCEPTABLE USE POLICY</div>
        <div>
          8.1. Rules of Conduct. You are personally responsible for your use of
          Services and Software, and while using Services and Software you must
          conduct yourself in a lawful and respectful manner in accordance with
          our rules of conduct below. We may temporarily or permanently ban
          users who violate these rules, or who abuse email communications,
          support communications, or the community purpose of any message board
          areas, as determined by us and our developer partners, in our sole
          discretion. We and our developer partners reserve the right to disable
          a player’s ability to upload profile photos or edit their username at
          any time.
        </div>
        <div>
          Profanity, obscenities, or the use of **asterisks** or other “masking”
          characters to disguise such words, is not permitted.
        </div>
        <div>
          You may not use or upload obscene, lewd, slanderous, pornographic,
          abusive, violent, insulting, indecent, threatening and harassing
          language of any kind, as determined by us in our sole discretion.
        </div>
        <div>
          Service usernames will be displayed as ‘Your Name’; impersonating
          other players is not allowed.
        </div>
        <div>
          Do not share personal information (your name, phone number, home
          address, and password) with other users.
        </div>
        <div>
          Do not transmit or upload any copyrighted or trademarked materials in
          messages or postings.
        </div>
        <div>
          Information disclosed in chat rooms, message boards, gameplay dialogue
          or via eMessages is revealed to the public, and neither we, nor our
          developer partners, is responsible for information you choose to
          disclose to others.
        </div>
        <div>
          Advanced fonts, java, tables, html or other programming codes or
          commands are not allowed in messages.
        </div>
        <div></div>You may not attempt to participate in any Service by means of
        automatic, macro, programmed or similar methods.
        <div>You may not commit fraud with regard to any Service.</div>
        <div>
          You may not attempt to impersonate or deceive another user for the
          purposes of illicitly obtaining cards, passwords, account information
          etc. (aka “scamming”).
        </div>
        <div>
          You may not make any commercial use of any of the information provided
          on the Website or through the Services nor make any use of the Website
          or Services for the benefit of a business.
        </div>
        <div>
          8.2.Your Content. You acknowledge that the Service is a passive
          conduit for user content and that: (i) neither we, nor our developer
          partners, pre-screen user content or communications or (ii) control,
          verify or pay for any user content or communications. We do not
          endorse, and specifically disclaim any responsibility or liability
          for, any publicly posted content. In addition, as agent for our
          developer partners, we may terminate your access to any public forums
          at any time, without notice, for any reason whatsoever, and/or delete,
          move or edit content submitted publicly, in whole or in part. You may
          only upload, send, and receive messages and material that is related
          to the subject matter of the public forums, complies with Applicable
          Laws, and conforms to any additional terms of service posted in the
          public forums. You may not upload to, distribute, or otherwise publish
          any content, information, or other material that (a) violates or
          infringes the copyrights, patents, trademarks, service marks, trade
          secrets, or other proprietary rights of any person; (b) is libelous,
          threatening, defamatory, obscene, indecent, pornographic, or could
          give rise to any civil or criminal liability under U.S. or
          international law; or (c) includes any bugs, viruses, worms, trap
          doors, Trojan horses or other harmful code or properties. Submissions
          or opinions expressed by users are that of the individual expressing
          such submission or opinion only. Subject to the foregoing, as agent
          for our developer partners, we may edit, refuse to post, or to remove
          any information or materials submitted, in our discretion. You may not
          use a false email address, pretend to be someone other than yourself
          or otherwise mislead us or third parties as to the origin of your
          submissions or content.
        </div>
        <div>
          8.3. Cheating, Fraud, and Abuse. In accessing or participating in
          Services or using the Software, you represent and warrant to us and
          our developer partners that you will not engage in any activity that
          interrupts or attempts to interrupt the operation of the Services or
          Software. Anyone who engages in, participates in or displays behavior
          that may be interpreted, in the discretion of us and our developer
          partners only, as unfair methods in participating in Services or using
          the Software, including but not limited to, the opening and/or use of
          multiple accounts, the use of unauthorized or altered software or
          hardware to assist play (e.g., bots, bot nets, and collusion with
          bots), intentionally poor play in certain games to achieve competitive
          advantage, collusion with other players (e.g. intentionally losing
          rematches in Cash Competitions), deliberate transfer of money between
          accounts (e.g., “money laundering”), harassment of other participants,
          posting objectionable material, breach of these Terms, breach of
          security of your Account, or any other act (whether through the use of
          automated technology or otherwise) that unfairly alters your chance of
          winning or constitutes the commission of fraud (collectively,
          “Abuse”), you will be subject to immediate sanction (as determined by
          us and our developer partners only), which may include, without
          limitation: (1) immediate termination of your Account and blocking of
          your access to the Website and Services; (2) any Winnings that you may
          otherwise have been entitled to receive shall be void and forfeited;
          and (3) any Winnings received by you shall be subject to disgorgement
          and/or recoupment. In addition to the foregoing, as agent for our
          developer partners, we reserve the right to disclose or report any
          money laundering similar illegal activity to law enforcement and
          regulatory authorities. Without limiting our other available remedies,
          we, solely, or in conjunction with our developer partners, may
          institute or seek any injunctive relief, civil and/or criminal
          proceedings against you and/or any of your co-conspirators arising out
          of or related to your commission of Abuse, including without
          limitation recovering all of our and/or our developer partners’ fees
          and expenses (including reasonable attorneys’ fees) in connection with
          such efforts.
        </div>
        <div>
          8.4. Hacking, Tampering, or Unauthorized Access. Any attempt to gain
          unauthorized access to systems or any other user’s account, interfere
          with procedures or performance of Services, Software or the Website or
          deliberately damage or undermine the Services or Software is subject
          to civil and/or criminal prosecution and will result in immediate
          termination of your Account and forfeiture of your Winnings. You
          acknowledge that we are not responsible for any damage, loss or injury
          resulting from hacking, tampering or other unauthorized access or use
          of the Services or your Account.
        </div>
        <div>
          8.5. Restrictions. Any use, reproduction or redistribution of the
          Service, Software, or related products or services (including without
          limitation, Digital Assets) not expressly authorized by these Terms is
          expressly prohibited. You may not engage in, or assist others to
          engage in, conduct that would damage or impair our property including,
          without limitation: (a) copying, distributing, transmitting,
          displaying, performing, framing, linking, hosting, caching,
          reproducing, publishing, licensing, or creating derivative works from
          any information, software, products or services obtained from us; (b)
          providing unauthorized means through which others may use Services
          such as through server emulators; (c) taking actions that impose an
          unreasonable or disproportionately large load on network
          infrastructure, or that could damage, disable, overburden or impair
          our Websites or Services; (d) interfering with any other party’s use
          and enjoyment of Services and/or Software (including cheating) or the
          Website; and/or (e) attempting to gain unauthorized access to third
          party accounts, the Service or Software.
        </div>
        <div className={styles.pram}>
          9. WINNINGS, ACCOUNT FUNDS, AND PAYMENTS
        </div>
        <div>
          9.1. Fees. Fees and payments for Services that you pay to participate
          in Competitions (“Fees”) and billing procedures are detailed in the
          billing application. If Fees are charged to your Account, you agree to
          pay those Fees. All Fees are stated in U.S. Dollars, must be prepaid
          and are non-refundable. You are fully responsible and liable for all
          charges, deposits and withdrawals made under your Account, including
          any unauthorized charges, deposits or withdrawals. The price of
          Services may change at any time, but no price change will affect your
          past purchases.
        </div>
        <div>
          9.2. Billing. As agent for our developer partners, we may change Fees
          and billing procedures by updating the billing application with or
          without notice to you. By providing a payment method, you (i)
          represent that you are authorized to use the payment method that you
          provided and that any payment information you provide is true and
          accurate; (ii) authorize us, as agent for our developer partners, to
          charge you for the Services using your payment method; and (iii)
          authorize us, as agent for our developer partners, to charge you for
          any paid feature of the Services that you choose to sign up for. As
          agent for our developer partners, we may bill you (a) in advance; (b)
          at the time of purchase; or (c) shortly after purchase, in our sole
          discretion. You must tell us within 120 days after an error first
          appears on your bill for an investigation of the charge to occur
          promptly. After 120 days from the first appearance of the error,
          neither we nor our developer partners (i) will be liable for any
          losses resulting from the error and (ii) will be required to correct
          the error or provide a refund. If we or our developer partners
          identifies a billing error, it will be corrected within 90 days. You
          must pay for all reasonable costs we, as agent for our developer
          partners, incur to collect any past due amounts, including without
          limitation reasonable attorneys’ fees and other legal fees and costs.
        </div>
        <div>
          9.3. Cash Deposits. If you play games integrated in a Competition
          without depositing U.S. Dollars into your Account for that
          Competition, then you are a “Non-Cash Player” with respect to such
          Competition. However, if you play in a Competition that requires an
          entry paid in U.S. Dollars (“Cash Competition”), then you are a “Cash
          Player”, and if you establish a positive Account balance for entry
          fees for Cash Competitions, then you must submit and maintain at all
          times the following current and correct information: your full name,
          your permanent residential address, your phone number and your credit
          card or other payment information. Participating in Cash Competitions
          may require establishing a positive Account balance in any amount we
          or our developer partners determine. If you are a Cash Player, by
          submitting this information, you consent to allowing us and our
          developer partners to share your personal and payment information in
          confidence with third party service providers for the purposes of
          validating your identity and assessing the transaction risk associated
          with accepting your selected method of payment, and for any other
          purpose as detailed in our Privacy Policy. If you make a credit card
          deposit, an authorization request will be submitted to the issuing
          bank of at least Ten U.S. Dollars (US$10.00) to your credit limit,
          even if the actual amount charged may be lower. When you withdraw
          funds from your account, you may be required to submit your social
          security number or other identifying information. Failure to provide
          your social security number or other requested identifying information
          at that time may result in inability to process your withdrawal for
          any winnings.
        </div>
        <div>
          9.4. Bonus Funds. If you are a Cash Player then you may be granted
          bonus funds and/or credits (“Bonus Funds”). Bonus Funds can be used to
          enter Cash Competitions, but cannot be withdrawn or used for any other
          Service. When you enter a Cash Competition, US$0.01 (one U.S. cent) of
          Bonus Funds will be used to enter the competition for every US$0.10
          (ten U.S. cents) spent on the Cash Competition entry fee.
          Notwithstanding the foregoing, additional Bonus Funds will be used to
          enter Cash Competitions if Bonus Funds are the only currency available
          in your account. When you win a Cash Competition, any Bonus Funds that
          you have used to pay the entry fee will be returned to you and any
          additional winnings beyond your entry fee will be paid in U.S.
          Dollars. If you initiate a withdrawal of funds from your Account, you
          will forfeit all Bonus Funds currently in your Account. If you do not
          enter a Cash Competition within a continuous 60 day time period, all
          Bonus Funds in your account will be forfeited.
        </div>
        <div>
          9.5. Withdrawals. If you are a Cash Player, you may request a
          withdrawal of funds from your available Account balance at any time.
          Digital Assets and Bonus Funds cannot be withdrawn. Processing of
          requested funds is made by check or by refund to the payment method
          used to make your deposit and may take up to ninety (90) days;
          provided, however, that we, as agent for our developer partners, may
          freeze your Account and/or delay a request for withdrawal of funds
          pending completion of any investigation of reported or suspected
          Abuse, verification of  eligibility or to comply with Applicable Laws.
          A check request processing fee of up to $2.00 for any withdrawal of
          less than $10.00 may be assessed.
        </div>
        <div>
          9.6. Closing Accounts; Forfeiture of Funds. If you close your Account,
          funds in your Account will be returned subject to the terms of Section
          8.5. If your Account is unilaterally closed or terminated for cause as
          allowed in these Terms, funds in your Account may be forfeited and not
          returned to you. If your funds are forfeited by you in accordance with
          this Section or Sections 2.1, 4, 7.3, 7.4, 7.5 or 8.9 hereof, these
          funds may be used to defray the costs of administration and
          enforcement of these Terms, allocated or disbursed such amounts to
          other Services or donated these funds.
        </div>
        <div>
          9.7. Account Monthly Maintenance Fee. If your Account is inactive
          (i.e. you have not entered at least one (1) tournament) for six (6)
          consecutive months or more, a maintenance fee of $2.00 per month may
          be charged (the “Monthly Maintenance Fee”). After five or more months
          of inactivity you will be notified by email that if your Account
          remains inactive for one more month, the Monthly Maintenance Fee will
          be deducted from your Account each consecutive month after that that
          it remains inactive. The Monthly Maintenance Fee will not be deducted
          from your Account if there are no funds in your Account. However, if
          your Account has no funds and has been inactive for twelve or more
          consecutive months, your Account may be closed.
        </div>
        <div>
          9.8. Refund Policy. Unless otherwise required by law, no refunds are
          given.
        </div>
        <div>
          9.9. Winnings. If you are eligible to receive Winnings, in our
          capacity as agent for our developer partners, we may require that you
          provide proof that you are, or were at the time of your participation
          in the subject Competition, eligible to participate in accordance with
          these Terms and that your participation was in accordance with these
          Terms. If you do not provide such proof to our or our developer
          partners’ reasonable satisfaction, then you will not receive the
          relevant Winnings. If you receive a payment in error, we, as agent for
          our developer partners, may reverse or require return of the payment.
          You agree to cooperate with our efforts to do this, in our capacity as
          agent for our developer partners. We may also reduce payment to you
          without notice to adjust for any previous overpayment.
        </div>
        <div>
          9.10. Credit Card/PayPal Use. When you pay for any charges by credit
          card, you represent to us that you are the authorized user of such
          credit card. You must promptly notify us of any changes to your credit
          card account number, its expiration date and/or your billing address,
          or if your credit card expires or is canceled for any reason. We are
          not liable for any loss caused by any unauthorized use of your credit
          card or other method of payment by a third party (such as PayPal) in
          connection with the Services. Any attempt to defraud through the use
          of credit cards or other methods of payment, regardless of the
          outcome, or any failure by you to honor legitimate charges or requests
          for payment, will result in immediate termination of your Account,
          forfeiture of Winnings, and pursuit of civil litigation and/or
          criminal prosecution.
        </div>
        <div>
          9.11. Taxes. If you are a U.S. resident, we, as agent for our
          developer partners, may send you an IRS Form W-9 and 1099-MISC or
          other appropriate form if your Winnings total $600 or more in any
          given calendar year. Depending on the state in which you reside, we
          may also send you additional federal or state tax forms. Without
          limiting the foregoing, as agent for our developer partners, we may
          withhold from your existing Account balance and/or from future
          Winnings any amount required to be withheld by Applicable Laws,
          including amounts due in connection with your failure to complete
          relevant tax documentation, but you remain solely responsible for
          paying all federal, state and other taxes in accordance with all
          Applicable Laws.
        </div>
        <div className={styles.pram}>10. COPYRIGHT COMPLAINTS</div>
        <div>
          The Digital Millennium Copyright Act (DMCA) provides copyright owners
          who believe that their rights under the United States copyright law
          have been infringed by acts of third parties over the Internet with
          ways to protect their rights. If you believe that your copyrighted
          work has been copied without your authorization and is available in
          the Services in a way that may constitute copyright infringement, you
          can provide notice of your claim to the designated agent listed below.
          For your notice to be effective, it must include the following
          information:
        </div>
        <div>
          A physical or electronic signature of a person authorized to act on
          behalf of the owner of the intellectual property right that is
          allegedly infringed;
        </div>
        <div>
          A description of the copyrighted work that you claim has been
          infringed upon;
        </div>
        <div>
          A description of where the material that you claim is infringing is
          located in this game; Information reasonably sufficient to permit us
          to contact the complaining party, such as address, telephone number,
          and, if available, an e-mail address at which the complaining party
          can be contacted;
        </div>
        <div>
          A statement by you that you have a good-faith belief that the disputed
          use is not authorized by the copyright owner, its agent, or the law;
        </div>
        <div>
          A statement that the information in the notification is accurate and,
          under penalty of perjury, that the complaining party is authorized to
          act on behalf of the owner of the exclusive right that is allegedly
          infringed.
        </div>
        <div>
          Punch Games’ Designated Agent is: Punch Games Inc.,
          contact@punch.games.
        </div>
        <div className={styles.pram}>11. PROPRIETARY RIGHTS</div>
        <div>
          11.1. Your Content. Subject to these Terms, you grant to us a
          worldwide, perpetual, unrestricted, royalty-free license to use, copy,
          modify, distribute, publish, perform, transmit and display any and all
          communications, materials, content and information that you submit to
          us or our developer partners, whether directly or through the Website,
          Services or Software (“Content”), and waive any moral rights you may
          have in Content. Subject to these Terms, any communication or material
          you transmit to us, including any data, questions, comments,
          suggestions or the like, will be treated by us and our developer
          partners as non-confidential and non-proprietary. Subject to these
          Terms, we and our developer partners may use Content for any purpose,
          without any compensation, accounting or other liability or obligation
          to you. If you use or share Content in a way that infringes others’
          copyrights, trademarks, other intellectual property rights or privacy
          rights, you are breaching these Terms. You represent and warrant to us
          and our developer partners that for the duration of these Terms you
          have (and will have) all the rights necessary for the Content you
          upload or share on the services and that the use of the Content, as
          contemplated in this Section will not violate any Applicable Laws. If
          your Account is cancelled or terminated, we and our developer partners
          may permanently delete your Content from our servers and we have no
          obligation to return Content to you.
        </div>
        <div>
          11.2. Software License. Subject to these Terms, we grant to you a
          personal, nonexclusive, limited, non-transferable, non-assignable,
          non-sublicensable, limited license to install and run the Software, in
          object code format only, on a Device owned or controlled by you,
          solely for the purpose of accessing and using the Services in
          accordance with these Terms, and solely for so long as your Account is
          open. You acknowledge that you are receiving licensed rights only. You
          may not network the Software among devices. You may not directly or
          indirectly, or authorize any person or entity to: (i) reverse
          engineer, decompile, disassemble, re-engineer or otherwise create or
          attempt to create or permit, allow or assist others to create the
          source code of the Software or its structural framework; (ii) create
          derivative works of the Software; (iii) use the Software in whole or
          in part for any purpose except as expressly provided herein; or (iv)
          disable or circumvent any access control or related device, process or
          procedure established with respect to the Software. You acknowledge
          that you have access to sufficient information such that you do not
          need to reverse engineer the Software in any way to permit other
          products or information to interoperate with the Software. You are
          responsible for all use of the Software that is under your possession
          or control.
        </div>
        <div>
          11.3. Digital Assets. Some Services and Software may allow you to
          create digital objects, such as avatars. Such digital objects, in
          addition to any digital or virtual objects or assets we assign to your
          Account, such as “Z”, virtual trophies or virtual goods, are
          collectively referred to as “Digital Assets”. You acknowledge that
          because all Digital Assets are created through the Software and/or
          Services, we solely and exclusively own all Digital Assets. To the
          extent we do not automatically own any Digital Asset, you hereby
          irrevocably, expressly and automatically assign to us, in perpetuity,
          all right, title and interest in and to any such Digital Assets,
          including, without limitation, all copyrights, patent rights, trade
          secrets, trademarks, moral rights and all other applicable proprietary
          and intellectual property rights throughout the world. If you have any
          rights to Digital Assets that cannot (as a matter of law) be assigned
          to us in accordance with the foregoing, you unconditionally and
          irrevocably: (i) waive the enforcement of such rights against us; and
          (ii) grant to us an exclusive, irrevocable, perpetual, worldwide,
          royalty-free license (a) to reproduce, create derivative works of,
          distribute, publicly perform, publicly display, digitally perform and
          otherwise use and exploit such Digital Assets, (b) to use, make, have
          made, sell, offer to sell, import and otherwise exploit any product or
          service based on, embodying, incorporating or derived from Digital
          Assets, and (c) to exercise any and all other present or future rights
          not yet known in Digital Assets. Subject to these Terms, we grant you
          a limited license to use Digital Assets through your own Account
          solely for purposes and in furtherance of your use of Services.
        </div>
        <div>
          11.4. Ownership. All content of the Website, all Punch Games products
          and services, all Punch Games logos, symbols, expansion names and
          symbols, play level symbols, trade dress or “look and feel”, all
          Digital Assets and those portions of the Software and Services which
          are property of Punch Games as well as all derivative works or
          modifications of any of the foregoing, and all related and underlying
          intellectual property (including without limitation patents,
          trademarks, trade secrets and copyrights), are our sole and exclusive
          property. We reserve all rights not expressly granted herein. Except
          as expressly set forth herein, no right or license is granted
          hereunder, express or implied or by way of estoppel, to any
          intellectual property rights and your use of Services and/or Software
          does not convey or imply the right to use the Services or Software in
          combination with any other information or products.
        </div>
        <div className={styles.pram}>12. TERM AND TERMINATION</div>
        <div>
          These Terms apply to you and to us from the date that you accept them
          as provided above, until termination of your Account (whether by
          deactivation, cancellation, closure, expiration or termination by you
          or us). You may terminate these Terms at any time and for any reason
          by going to your Account webpage and following the account closure
          process. Upon termination of your Account, you must immediately
          discontinue use of the Services and the Software and your Account and
          promptly uninstall and delete all copies of the Software. Immediately
          upon termination of your Account, all license and rights granted to
          you under these Terms automatically terminate and you shall
          automatically forfeit the right to use Digital Assets. Your obligation
          to pay accrued Fees will survive any termination of these Terms. Any
          and all terms and conditions within these Terms which should, by their
          nature, survive termination of these Terms, will survive such
          termination.
        </div>
        <div className={styles.pram}>
          13. Modification of these Terms and Conditions
        </div>
        <div>
          The Terms and Conditions are published so that they can be consulted
          at any time at the following link: www.Punch Games.com Punch Games
          reserves the right to modify, update and change the Terms and
          Conditions, as well as the Privacy Policy, the Cookies Policy and the
          rules that apply to each of the video games offered on the Platform,
          in which case it will inform the user of said modifications or
          changes, by publishing a new version of these Terms and Conditions on
          the Website and/or on the Platform. Notwithstanding the foregoing, and
          in accordance with the applicable regulations, the express consent of
          the User will be requested by means of a notification when logging
          into their User Account for the acceptance of the new version of the
          Terms and Conditions, and the User must expressly accept the new
          version of the Terms and Conditions. If you are not satisfied, you
          will not be able to continue participating in the Punch Games Services
          and you must immediately request that your account be blocked. In this
          case, and provided that there has been no breach of the Terms and
          Conditions by the User, the User will be reimbursed the balances that
          the User had available in his/her User Account at the time of closure
          or blocking of the account.
        </div>
        <div className={styles.pram}>14. Claims and Customer Service</div>
        <div>
          The resolution of incidents, complaints and claims in relation to the
          Punch Games Services will be carried out in accordance with the
          provisions of the Help section, included in the Platform and/or on the
          Website. The User may make any claim whenever he or she wishes to do
          so. To do this, you can write an e-mail to the address
          contact@punch.games. The User may file a claim within a period of
          three (3) months after the date of the circumstance that gave rise to
          the claim. The complaint shall always be dealt with by Punch Games in
          a mandatory manner, within a maximum period of one (1) month following
          receipt of the complaint. The User must indicate in his or her letter
          his or her Username and a brief description of the facts which are the
          subject of the complaint and his or her claims. Punch Games will not
          tolerate any threatening, damaging, abusive or violent behavior by the
          User towards any of its employees. In the event that the User behaves
          in such a way (the determination of which will be at our sole
          discretion), Punch Games reserves the right to suspend and/or close
          their User Account, and/or to take the measures it deems appropriate.
        </div>
        <div className={styles.pram}>15. Cession</div>
        <div>
          The User may not transfer, assign, sub-license or give as security in
          any way the rights or obligations under these Terms and Conditions.
        </div>
        <div className={styles.pram}>16. DISCLAIMERS</div>
        <div>
          In conjunction with our developer partners, we strive to keep Services
          up and running; however, all online services suffer occasional
          disruptions and outages, and we are not responsible or liable for any
          disruption or loss you may suffer as a result. You should regularly
          backup content that you store on the Services.
        </div>
        <div>
          TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, ALL SERVICES,
          PRODUCTS, INFORMATION AND DATA PROVIDED OR MADE AVAILABLE BY US OR OUR
          DEVELOPER PARTNERS (INCLUDING WITHOUT LIMITATION DIGITAL ASSETS AND
          SOFTWARE) ARE “AS IS” AND WITHOUT WARRANTY OF ANY KIND, EITHER
          EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO, IMPLIED WARRANTIES
          OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR
          NON-INFRINGEMENT, AND YOU ASSUME THE ENTIRE RISK WITH RESPECT THERETO.
          WE MAKE NO REPRESENTATION, WARRANTY OR GUARANTEE THAT SERVICES, YOUR
          ACCOUNT, SOFTWARE, THE WEBSITE AND/OR DIGITAL ASSETS WILL BE SECURE,
          VIRUS-FREE, UNINTERRUPTED OR ERROR-FREE, OR THAT THE SAME WILL
          FUNCTION PROPERLY IN COMBINATION WITH ANY THIRD PARTY COMPONENT,
          TECHNOLOGY, HARDWARE, SOFTWARE OR SYSTEM.
        </div>
        <div>
          We are not responsible or liable for any damage, loss or injury
          resulting from, relating to or arising out of (1) use, access or
          attempted use or access of Services, Digital Assets, the Software or
          the Website; (2) downloading any information from the Software,
          Services or Website; and/or (3) violations of these Terms by other
          users. We have no responsibility to enforce these terms for the
          benefit of any user.
        </div>
        <div>
          Some states do not allow the disclaimer of implied warranties; as such
          the foregoing disclaimer may not apply to you in its entirety.
        </div>
        <div className={styles.pram}>17. LIMITATIONS OF LIABILITY</div>
        <div>
          TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, NEITHER WE, NOR
          OUR DEVELOPER PARTNERS, SUPPLIERS OR LICENSORS, WILL BE LIABLE TO YOU
          OR ANY THIRD PARTY FOR ANY INDIRECT, SPECIAL, PUNITIVE, CONSEQUENTIAL
          (INCLUDING, WITHOUT LIMITATION, LOST PROFITS, LOST DATA OR LOSS OF
          GOODWILL) OR INCIDENTAL DAMAGES, ARISING OUT OF OR RELATING TO THESE
          TERMS, THE WEBSITE OR ANY INFORMATION, SERVICES, PRODUCTS OR SOFTWARE
          MADE AVAILABLE OR ACCESSIBLE TO YOU, WHETHER BASED ON A CLAIM OR
          ACTION OF CONTRACT, WARRANTY, NEGLIGENCE, STRICT LIABILITY OR OTHER
          TORT, BREACH OF ANY STATUTORY DUTY, INDEMNITY OR CONTRIBUTION OR
          OTHERWISE, EVEN IF WE OR OUR DEVELOPER PARTNERS, THIRD PARTY SUPPLIERS
          OR LICENSORS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH LIABILITY.
        </div>
        <div>
          TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, OUR MAXIMUM
          LIABILITY TO YOU ARISING OUT OF OR IN ANY WAY CONNECTED TO THESE TERMS
          SHALL NOT EXCEED U.S. $50.00. THE EXISTENCE OF ONE OR MORE CLAIMS BY
          YOU WILL NOT INCREASE OUR LIABILITY. IN NO EVENT SHALL OUR DEVELOPER
          PARTNERS, SUPPLIERS OR LICENSORS HAVE ANY LIABILITY ARISING OUT OF OR
          IN ANY WAY CONNECTED TO OUR PRODUCTS, INFORMATION OR SERVICES.
        </div>
        <div>
          Certain jurisdictions do not allow limitations of liability for
          incidental, consequential or certain other types of damages; as such,
          the limitations and exclusions set forth in this Section may not apply
          to you.
        </div>
        <div className={styles.pram}>
          18. DISPUTE RESOLUTION AND ARBITRATION
        </div>
        <div>
          18.1. General. This Section applies to any Dispute except for Disputes
          relating to the enforcement or validity of our intellectual property
          rights. The term “Dispute” means any dispute, action or other
          controversy between you and us concerning these Terms, the Services or
          any product, service or information we make available to you, whether
          in contract, warranty, tort, statute, regulation, ordinance or any
          other legal or equitable basis. “Dispute” will be given the broadest
          possible meaning allowable under law. In the event of a Dispute, you
          or we must give the other a Notice of Dispute, which is a written
          statement that sets forth the name, address and contact information of
          the party giving it, the facts giving rise to the Dispute, and the
          relief requested. You must send any Notice of Dispute by U.S. Mail to
          Punch Games Customer Support,1007 N Orange St. 4th Floor Suite #331,
          Wilmington, Delaware 19801, United States. We will send any Notice of
          Dispute to you by U.S. Mail to your address if we have it, or
          otherwise to your email address. You and we will attempt to resolve
          any Dispute through informal negotiation within sixty (60) days from
          the date the Notice of Dispute is sent. After sixty (60) days, either
          you or we may commence arbitration. You may also litigate any Dispute
          in small claims court in your county of residence or San Francisco,
          California, if the Dispute meets all requirements to be heard in the
          small claims court. You may litigate in small claims court whether or
          not you negotiated informally first.
        </div>
        <div>
          18.2. Binding arbitration. If you and we do not resolve any Dispute by
          informal negotiation or in small claims court, any other effort to
          resolve the Dispute will be conducted exclusively by binding
          arbitration as described in this Section. Instead, all Disputes will
          be resolved before a neutral arbitrator, whose decision will be final
          except for a limited right of appeal under the Federal Arbitration
          Act. Any court with jurisdiction over the parties may enforce the
          arbitrator’s award.
        </div>
        <div>
          18.3. Class action waiver. To the maximum extent permitted under
          applicable law, any proceedings to resolve or litigate any Dispute in
          any forum will be conducted solely on an individual basis. Neither you
          nor we will seek to have any Dispute heard as a class action or in any
          other proceeding in which either party acts or proposes to act in a
          representative capacity. No arbitration or proceeding will be combined
          with another without the prior written consent of all parties to all
          affected arbitrations or proceedings. If this waiver is found to be
          illegal or unenforceable as to all or some parts of a Dispute, then it
          won’t apply to those parts. Instead, those parts will be severed and
          proceed in a court of law, with the remaining parts proceeding in
          arbitration.
        </div>
        <div>
          18.4. Arbitration procedure. If you are located within the United
          States, Canada, the United Kingdom or the European Union, or any of
          their territories, then any arbitration will be conducted by the
          American Arbitration Association (the “AAA”) under its Commercial
          Arbitration Rules. You and we each agree to commence arbitration only
          in San Francisco, California, USA. You may request a telephonic or
          in-person hearing by following the AAA rules. In a Dispute involving
          $10,000 or less, any hearing will be telephonic unless the arbitrator
          finds good cause to hold an in-person hearing instead. If you are
          located in a country other than listed above, then arbitration will be
          conducted by the International Court of Arbitration of the
          International Chamber of Commerce (ICC) pursuant to UNCITRAL rules,
          and the arbitration shall be conducted in English and the English
          version of these Terms (and not any translation) shall control, and
          both parties hereby agree to accord this arbitration agreement the
          broadest scope admissible under applicable Laws, and that it shall be
          interpreted in a non-restrictive manner. The arbitrator may award the
          same damages to you individually as a court could. The arbitrator may
          award declaratory or injunctive relief only to you individually, and
          only to the extent required to satisfy your individual claim. These
          Terms govern to the extent they conflict with the arbitrators’
          commercial rules. The arbitrator may award compensatory damages, but
          shall NOT be authorized to award non-economic damages, such as for
          emotional distress, or pain and suffering or punitive or indirect,
          incidental or consequential damages. Each party shall bear its own
          attorneys’ fees, cost and disbursements arising out of the
          arbitration, and shall pay an equal share of the fees and costs of the
          arbitrator and AAA; however, the arbitrator may award to the
          prevailing party reimbursement of its reasonable attorneys’ fees and
          costs (including, for example, expert witness fees and travel
          expenses), and/or the fees and costs of the arbitrator. Within fifteen
          (15) calendar days after conclusion of the arbitration, the arbitrator
          shall issue a written award and a written statement of decision
          describing the material factual findings and conclusions on which the
          award is based, including the calculation of any damages awarded.
          Judgment on the award may be entered by any court of competent
          jurisdiction. The parties waive their right to commence any action or
          judicial proceeding in connection with a dispute hereunder, except for
          purposes of: (i) recognition and/or enforcement of the arbitration
          award or any other decision by the arbitral tribunal, (ii) obliging
          the other party to participate in the arbitration proceedings, (iii)
          requesting any type of conservative or interim measure in connection
          with the dispute prior to the constitution of the arbitral tribunal,
          (iv) requesting the appearance of witnesses and/or experts, and/or (v)
          requesting that any information and/or documentation discovery be
          complied with. By agreeing to this binding arbitration provision, you
          understand that you are waiving certain rights and protections which
          may otherwise be available if a claim or Dispute were determined by
          litigation in court, including, without limitation, the right to seek
          or obtain certain types of damages precluded by this arbitration
          provision, the right to a jury trial, certain rights of appeal, the
          right bring a claim as a class member in any purported class or
          representative proceeding, and the right to invoke formal rules of
          procedure and evidence.
        </div>
        <div>
          18.5. Claims or Disputes. Must be filed within one year. To the extent
          permitted by applicable law, any claim or Dispute under these Terms
          must be filed within one year from the date of the cause of action. If
          a claim or dispute isn’t filed within one year, it’s permanently
          barred.
        </div>
        <div>
          18.6. Equitable Relief. You agree that we would be irreparably damaged
          if these Terms were not specifically enforced. Therefore, in addition
          to any other remedy we may have at law, and notwithstanding our
          agreement to arbitrate Disputes, we are entitled without bond, other
          security, or proof of damages, to seek appropriate equitable remedies
          with respect to your violation of these Terms in any court of
          competent jurisdiction.
        </div>
        <div>
          18.7 Language of the Terms: If we provide a translated version of
          these Terms, the User Terms of Service, the Developer Terms and
          Conditions of Service, the Affiliate Program Terms of Service, the
          Punch Games Privacy Policy, or any other terms or policy, it is for
          informational purposes only. If the translated version means something
          different than the English version, then the English meaning will be
          the one that applies.
        </div>
        <div className={styles.pram}>19. RIGHT OF EXCLUSION</div>
        <div>
          THE HOLDER reserves the right to deny or withdraw access to the
          website and/or the services offered on it, without the need for any
          prior warning, on its own or by a third party, from those users who
          fail to comply with the contents of this legal notice.
        </div>
        <div className={styles.pram}>20. MISCELLANEOUS</div>
        <div>
          These Terms constitute the entire agreement between you and us
          pertaining to the subject matter hereof and supersede all prior or
          other arrangements, understandings, negotiations and discussions,
          whether oral or written. These Terms cannot be modified by you, and
          may only be modified by us as provided above. Our failure to require
          or enforce strict performance by you of any provision of these Terms
          or to exercise any right under them shall not be construed as a waiver
          or relinquishment of our right to assert or rely upon any such
          provision or right in that or any other instance. The provisions of
          these Terms are intended to be severable. If for any reason any
          provision of these Terms shall be held invalid or unenforceable in
          whole or in part by any court of competent jurisdiction, such
          provision shall, as to such jurisdiction, be ineffective to the extent
          of such determination of invalidity or unenforceability without
          affecting the validity or enforceability thereof in any other manner
          or jurisdiction and without affecting the remaining provisions of the
          Terms, which shall continue to be in full force and effect. Section
          titles in these Terms are for reference only and have no legal effect.
          No right or remedy of ours shall be exclusive of any other, whether at
          law or in equity, including without limitation damages injunctive
          relief, attorneys’ fees and expenses. We may assign these Terms, in
          whole or in part, at any time without notice to you. You may not
          assign these Terms or transfer any rights to use the Services or
          Software. You consent to our providing you notifications about the
          Services or information the law requires us to provide via email to
          the address that you specified when you created your Account. Notices
          emailed to you will be deemed given and received when the email is
          sent. If you do not consent to receive notices electronically, you
          must close your Account. These Terms are solely for your and our
          benefit, and not for the benefit of any other person, except for our
          successors and assigns.
        </div>
        <div>
          A printed version of these Terms and of any notice given in electronic
          form will be admissible in judicial or administrative proceedings
          based upon or relating to these Terms to the same extent and subject
          to the same conditions as other business documents and records
          originally generated and maintained in printed form.
        </div>
        <div>
          Please send any questions or comments (including all inquiries
          unrelated to copyright infringement) to: Punch Games Customer Support,
          1007 N Orange St. 4th Floor Suite #331, Wilmington, Delaware 19801,
          United States. Please print these Terms for your records.
        </div>
        <div>Privacy Policy</div>
        <div>
          At Punch Games Inc. (“Punch Games”, “we”, “us” or “our”), we take your
          privacy and the security of your information very seriously.This
          Privacy Policy Statement (“Privacy Policy”) covers Punch Games-owned
          and -operated websites, including Punch Games.com (“Site” or “Sites”),
          and any services offered by Punch Games including technology services
          that enable independent game developers to host tournaments and
          provide competitive gaming activity to end-users, and any use of the
          Punch Games SDK, including all Punch Games Public Forums, and the
          Developer Console (collectively, the “Services”). This Privacy Policy
          is incorporated into, and is part of, our Terms of Service available
          at https://www.Punchgames8.com which govern your access to the Site
          and your use of the Site and/or Services. Unless otherwise defined
          herein, capitalized terms shall have the meaning assigned to such
          terms in the Terms of Service.
        </div>
        <div>
          If you have any questions regarding this Privacy Policy, please
          contact us at contact@punch.games.
        </div>
        <div>
          For the purposes of EU data protection laws (“Data Protection Law”),
          Punch Games is a data controller (i.e., the company that is
          responsible for, and controls the processing of your personal data).
        </div>
        <div>
          This Privacy Policy describes the categories of information we gather
          from people visiting our Site and from individual users (“you” or
          “users”) interacting with the Services, and how we use, transfer, and
          secure such information. By accessing any part of our Site or using
          any of the Services, you agree to be bound by this Policy. This Policy
          does not govern information we receive from third parties. If you do
          not agree to the terms of this Policy, please do not use the Site, or
          any of our Services. Each time you use any Sites or Services, the
          current version of this Privacy Policy will apply. Accordingly, when
          you use any Sites or Services, you should check the date of this
          Policy (which appears at the top) and review any changes since you
          last reviewed the Policy.
        </div>
        <div className={styles.pram}>
          1. SPECIAL NOTICE REGARDING MINORS UNDER 18 YEARS OF AGE
        </div>
        <div>
          Punch Games respects the privacy of children. The Services are not
          directed towards young children or minors under the age of 18. Please
          do not use the Services if you are under the age of 18. Punch Games is
          intent on complying with applicable laws and regulations regarding
          minors, including the United States’ Children’s Online Privacy
          Protection Act. Specifically, Punch Games will not knowingly collect
          and maintain any personally identifiable information from individuals
          under 18.
        </div>
        <div>
          If you are a parent or guardian who has discovered that your child has
          submitted personally identifiable information, Punch Games will make
          reasonable efforts to delete the information from its database at your
          request. To request the deletion of your child’s information, please
          send an email contact@punch.games.
        </div>
        <div className={styles.pram}>
          2. CATEGORIES OF INFORMATION WE COLLECT
        </div>
        <div>
          We may collect two types of information from users of our Sites and
          Services: “Personal Information”, which is information is about, or
          relates to, an identified or identifiable individual, or that can be
          linked to that individual (such as name, email address, etc.), and
          “Aggregate Information”, which is information that cannot be used to
          identify you (such as frequency of visits to the Site, etc.)
        </div>
        <div>We collect a few categories of Personal Information:</div>
        <div>
          2.1 Personal Information you voluntarily provide us, which may
          include:
        </div>
        <div>
          2.1.1 In the course you acting as a job applicant to, an employee of,
          director of, officer of, or contractor of Punch Games, you may provide
          certain Personal Information to Punch Games in your applicable role.
          Said Personal Information could include email address, phone number,
          name, SSN, bank information and government identification numbers. For
          the purposes of the California Consumer Privacy Act (“CCPA”) this
          section provides the disclosure of categories of Personal Information
          we collect regarding the same. Depending on the activities and
          services that the User selects on the Website/Applications, the
          Company will process some or all of the following data: Data that you
          provided us when creating your online account and that may include,
          but is not limited to: your name, surname, username, e-mail address,
          birthdate; Information that you provide us when you make a payment on
          your account and which may include, but is not limited to: name,
          surname, postal address, date of birth, telephone number; Activity
          data on the Website/Applications, which would include, but are not
          limited to: Location, device data, source and destination data,
          Username, User ID, account password, gaming transactions, data related
          to online payments (debit/credit cards) and data provided to customer
          service services (including e-mails and phone calls); Data collected
          through cookies while using the Website/Applications, including those
          obtained in offline mode. For more information on the use and
          management of cookies, please refer to our Cookie Policy; Data
          provided by third parties who have previously obtained the User's
          consent to share with us data related to certain services, such as
          social networks or various mobile applications (when applicable).
        </div>
        <div>
          2.1.2 Your email address and password to allow you to create a Punch
          Games account and use the Services. Your email address may also be
          used for marketing and promotional emails as allowed by applicable
          law.
        </div>
        <div>
          2.1.3 Username, if provided by you, to allow you to use the Services.
          Your username, name, password and email address are collectively
          referred to as your “Account Information”.
        </div>
        <div>2.1.4 Birth date to verify that you are over the age of 18.</div>
        <div>2.1.5 Mailing address to allow physical prize fulfillment.</div>
        <div>
          2.1.6 Phone number to allow us to contact you, allow for the use of
          the Services, and to prevent fraud.
        </div>
        <div>2.1.7 Your mobile device’s unique device ID to prevent fraud.</div>
        <div>
          2.1.8 Any Personal Information you choose to add to your profile, such
          as an image. This Personal Information is used to enhance your use of
          the Services.
        </div>
        <div>
          2.1.9 You may provide credit card information or your Paypal username
          to use certain features of the Services. Punch Games will use
          third-party credit card processing companies to process your
          transactions. Punch Games will not have access to your credit card
          data.
        </div>
        <div>
          2.1.10 Certain Personal Information, such as first name, last name,
          shipping address, phone number, and Social Security number, to verify
          your identity when you withdraw cash from your account and by us and
          certain third-party service providers to monitor for fraudulent
          activity and verify that you can legally participate in cash
          tournaments and withdraw funds.
        </div>
        <div>
          2.1.11 Personal Information you may choose to submit to us through
          surveys, sending questions or comments, providing a resume, or other
          similar activities. This information may be used to enhance the
          Services, to market to you or others, and to allow us to make
          appropriate hiring decisions if submitted for that purpose.
        </div>
        <div>2.1.12 The purposes for which we process your data.</div>
        <div>
          To carry out administration tasks for the Website/Applications,
          including those necessary for the configuration and operation of your
          account; To ensure the accuracy of the User's data for the purposes of
          preventing fraud, deceptive practices or money laundering, reducing
          commercial risks and protecting the integrity of our games. These
          activities will involve a certain degree of automation in the creation
          of profiles, based on the User's registration and activity data; To
          adhere to the General Conditions of the Website/the Applications; To
          process online payments with third party payment providers and/or
          financial institutions; To provide the User with customer service,
          including by phone. Telephone conversations may be recorded for
          security reasons, for legal requirements and to improve our services;
          Observe legal and regulatory obligations or respond to the
          requirements of public authorities. These obligations and requirements
          refer mainly to financial regulations, the prevention of money
          laundering and may entail a certain degree of automation in the
          creation of profiles, based on the User's registration and activity
          data; To protect our rights, as well as those of our related parties.
          In this regard, in certain cases we may consider it necessary, always
          acting in good faith, to record and disclose data, in order to (i)
          protect, defend or enforce our legal rights, as well as our privacy,
          security and assets, (ii) protect the security, privacy and trust of
          both Users and the general public, and (iii) manage commercial risk;
          To improve the security, services and features of the
          Website/Applications. This can lead to studies and surveys, and the
          optional request to the User to communicate their assessments and
          comments; To carry out possible mergers or asset sales. If the Company
          disposes of part or all of its business or its assets, or is involved
          in a merger or business transfer process, it may reveal and transfer
          the User's data to the other party or parties and; Provide the User,
          based on their optional consent, with direct marketing communications
          (i) of a generic nature or based in part on his/her gaming experience,
          and/or (ii) of a personalized nature, via e-mail, instant messaging
          and (where applicable) chats, SMS and telephone.
        </div>
        <div>2.1.13 How long do we keep your data?</div>
        <div>
          The data will be kept for the duration of the execution of the General
          Conditions of the Website/Applications, that is, until you decide to
          unsubscribe from our services, plus the retention periods provided for
          or authorized by special laws, once the services have been completed.
        </div>
        <div>
          2.1.14. Your personal data is secure and will be kept confidential.
        </div>
        <div>
          The Company carries out the data processing through partially or fully
          automated electronic means, protecting them with adequate security
          measures. However, activities capable of producing significant legal
          effects, such as profile-based decision-making, always involve human
          intervention, or else the final decision is in the hands of
          individuals. The Company applies the appropriate legal,
          administrative, organizational, technical, physical and personnel
          measures, both by design and by default, to prevent the loss, theft
          and unauthorized use, disclosure or modification of data. The
          Website/Applications may contain links to or from networks associated
          with third party websites or applications. If you access a link that
          directs you to any of these websites or applications, please note that
          these will apply their own general conditions and privacy policies.
          The Company declines all responsibility related to their content.
          Check these general policies and conditions before accepting the
          sending of data to these platforms.
        </div>
        <div>
          2.2 Personal Information that is passively collected when you use the
          Sites or Services:
        </div>
        <div>
          2.2.1 Our system logs may record certain information about visitors to
          our Sites, including the web request, internet protocol (“IP”)
          address, device and mobile ad identifiers, browser information,
          interaction with the Sites, pages viewed, app usage, and other such
          information; we may collect similar information from emails you
          receive from us that can help us track which emails are opened and
          which links are clicked by recipients. Where these elements meet the
          definition of Personal Information, we will treat them as such.
        </div>
        <div>
          2.2.2 We use certain cookies, pixel tags and other technologies to
          help us understand how you use the Sites and enable us to personalize
          your experience. When you visit our website, we and our third-party
          service providers may receive and record Personal Information that you
          have provided and your digital signature, such as your IP address. The
          technologies we use to track your movements around our website include
          cookies, tracking scripts and pixels, and tagging technologies, which
          we may employ to understand your preferences, improve your experience
          on our website, etc. You can control the use of cookies at the
          individual browser level. We may ask advertisers or other third-party
          partners to serve ads or services to your devices, which rely on
          cookies or similar technologies placed on our Sites.
        </div>
        <div>
          2.2.3 With your consent and in connection with your use of the Punch
          Games SDK, we may use GPS technology (or other similar technology) to
          determine your current location in order to determine the state you
          are located within to establish which aspects of the Services you are
          permitted to use. You may withdraw your consent to our collection of
          your location information at any time, provided that you are not
          participating in cash competitions. If you choose to participate in a
          cash competition, you may not opt out of the collection of this type
          of geolocation data.
        </div>
        <div>
          2.2.4 A cache is a component of your mobile device that transparently
          stores data for recordkeeping purposes. Cache data identifies your
          mobile device. Most browsers and applications are initially set up to
          accept such data. If you prefer, you can program your mobile device so
          that it does not store this information while utilizing the Punch
          Games SDK. Certain features may only be available through the
          collection of such data. We may use such data to assist in data
          collection and to track usage and trends to help us better serve you.
          We also permit third parties who have entered into confidentiality
          agreements to access such data to help us monitor use of the Punch
          Games SDK for fraud or for any other activity that does not comply
          with applicable laws.
        </div>
        <div>2.3 Aggregate Information Collected</div>
        <div>
          2.3.1 Aggregate Information is information that does not identify you.
          Aggregate Information may be collected when you visit our Site or
          interact with our Services independent of any information you
          voluntarily enter. We may collect, use, store, and transfer Aggregate
          Information without restriction.
        </div>
        <div>
          2.3.2 When you visit our Site, some information is automatically
          collected. Such information could include your operating system, the
          site from which you linked to us (“referring page”), the name of the
          website you chose to visit immediately after ours (called the “exit
          page”), information about other websites you have recently visited,
          browser (software used to browse the internet) type and language, your
          site activity, and the time and date of your visit. Further, we
          automatically collect certain aggregate information from your use of
          our Services. This information could include the date and time of your
          visit, the phone network associated with your mobile device, your
          mobile device’s operating system or platform, the type of mobile
          device you use, and the features of our Services which you accessed.
          Although we do our best to honor the privacy preferences of our
          visitors, we are not able to respond to Do Not Track signals from your
          browser at this time.
        </div>
        <div className={styles.pram}>
          3. SHARING OF PERSONAL INFORMATION COLLECTED FROM YOU
        </div>
        <div>
          3.1 Punch Games may transfer Personal Information to third parties for
          the purpose of providing the Services. We may disclose Personal
          Information to our appropriate affiliates, including third-party
          service providers, to provide you with the Services. These third-party
          service providers are not authorized to retain, share, store or use
          the Personal Information for any purposes other than to provide the
          services they have been hired to provide.
        </div>
        <div>
          3.2 Certain Personal Information is transmitted to a third-party
          service provider for the purpose of processing any payments. The
          transmission of your payment information is automatic, and at no point
          do we, or any of our agents or employees, have the ability to review,
          access or retain such payment information. 3.3 Punch Games may also
          elect to transfer your Personal Information to third parties under
          special circumstances to: (i) to comply with a legal requirement,
          judicial proceeding, court order, or legal process served on Punch
          Games; (ii) to investigate a possible crime, such as fraud or identity
          theft; (iii) in connection with the sale, purchase, merger,
          reorganization, liquidation or dissolution of Punch Games; (iv) when
          we believe it is necessary to protect the rights, property, or safety
          of Punch Games or other persons; or (v) as otherwise required or
          permitted by law, including any contractual obligations of Punch
          Games.
        </div>
        <div className={styles.pram}>
          4. LEGAL BASIS FOR PROCESSING IN THE EU
        </div>
        <div>
          In the EU, the purposes for which we process your personal data are:
        </div>
        <div>
          4.1 Where we need to perform the contract we are about to enter into
          or have entered into with you for the Service;
        </div>
        <div>
          4.2 Where it is necessary for our legitimate interests (or those of a
          third party), and your interests and fundamental rights do not
          override those interests; and
        </div>
        <div>
          4.3 Where we need to comply with a legal or regulatory obligation in
          the EU.
        </div>
        <div>
          Please contact contact@punch.games if you need details about the
          specific legal basis on which we are relying to process your personal
          data where more than one legal basis has been set out.
        </div>
        <div className={styles.pram}>
          5. YOUR RIGHTS IN RESPECT OF YOUR PERSONAL INFORMATION IF YOU ARE A
          RESIDENT IN THE EU AND SWITZERLAND
        </div>
        <div>
          If you are located in the EU or Switzerland, you have the following
          rights in respect of your personal data that we hold:
        </div>
        <div>
          5.1 Right of access. The right to obtain access to your personal data.
        </div>
        <div>
          5.2 Right to rectification. The right to obtain rectification of your
          personal data without undue delay where that personal data is
          inaccurate or incomplete.
        </div>
        <div>
          5.3 Right to erasure. The right to obtain the erasure of your personal
          data without undue delay in certain circumstances, such as where the
          personal data is no longer necessary in relation to the purposes for
          which it was collected or processed.
        </div>
        <div>
          5.4 Right to restriction. The right to obtain the restriction of the
          processing undertaken by us on your personal data in certain
          circumstances, such as where the accuracy of the personal data is
          contested by you, for a period enabling us to verify the accuracy of
          that personal data.
        </div>
        <div>
          5.5 Right to portability. The right to portability allows you to move,
          copy or transfer personal data easily from one organization to
          another.
        </div>
        <div>
          5.6 Right to object. You have a right to object to processing based on
          legitimate interests and direct marketing.
        </div>
        <div>
          If you wish to exercise one of these rights, please contact us using
          the contact details at the end of this Privacy Policy. You also have
          the right to lodge a complaint to your local data protection
          authority. Further information about how to contact your local data
          protection authority is available at
          http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
        </div>
        <div className={styles.pram}>6. ACCOUNT SECURITY</div>
        <div>
          The security of your account relies on your protection of your
          password and mobile device. You are responsible for maintaining the
          security of your password and mobile device. You are solely
          responsible for any and all activities that occur under your account.
          You may not share your password with anyone. We will never ask you to
          send your password or other sensitive information to us in an email,
          though we may ask you to enter this type of information on the Punch
          Games SDK interface.
        </div>
        <div>
          Any email or other communication requesting your password or asking
          you to provide sensitive account information via email should be
          treated as unauthorized and suspicious and should be reported to us
          immediately at contact@punch.games. If you do share your password or
          your mobile device with a third party for any reason, the third party
          will have access to your account and your Personal Information, and
          you may be responsible for actions taken using your password. If you
          believe someone else has obtained access to your password, please
          change it immediately. If you believe that an unauthorized access has
          already occurred please report it immediately at contact@punch.games.
        </div>
        <div className={styles.pram}>7. DATA STORAGE AND TRANSFER</div>
        <div>
          Your information collected through our Service may be stored and
          processed in the United States or any other country in which Punch
          Games or its affiliates or service providers maintain facilities. If
          you are located in the European Union or other regions with laws
          governing data collection and use that may differ from U.S. law,
          please note that we may transfer information, including your Personal
          Information, to a country and jurisdiction that does not have the same
          data protection laws as your jurisdiction, and we will take all steps
          reasonably necessary to ensure that any Personal Information are
          treated securely and in accordance with this Privacy Policy and
          applicable law. Such transfers are made pursuant to appropriate
          safeguards as provided by applicable law. If you wish to enquire
          further about these transfers, please contact us using the details set
          out at the end of this Privacy Policy.
        </div>
        <div>
          For individuals based in the EU or Switzerland, we store personal data
          for as long as necessary to fulfill the purposes for which we collect
          the data (see above under “Categories of Information We Collect”),
          except if otherwise required by law.
        </div>
        <div className={styles.pram}>8. POSTINGS TO PUBLIC FORUMS</div>
        <div>
          All postings in Punch Games public forums will generally be available
          to, and freely accessible by, other users of the Punch Games public
          forums as well as the internet general public. Therefore, users should
          not expect that any information they post will be kept private or
          confidential and are encouraged to exercise discretion when using the
          public forums. Additionally, your username, which you can change, will
          always be included in conjunction with your postings in the public
          forums. Punch Games is not responsible for events arising from the
          distribution of any information you choose to publicly post or share
          through the forums. All information or materials uploaded by you while
          utilizing the Services is subject to our Terms of Service.
        </div>
        <div className={styles.pram}>9. MARKETING</div>
        <div>
          From time to time, we may contact you with relevant information about
          our Services. Most messages we send will be by email. For some
          messages, we may use Personal Information we collect about you to help
          us determine the most relevant information to share with you.
        </div>
        <div>
          If you do not want to receive such messages from us, you will be able
          to tell us by selecting certain boxes on forms we use when we first
          collect your contact details. You can change your marketing
          preferences by clicking on the unsubscribe link at the bottom of our
          emails.
        </div>
        <div className={styles.pram}>
          10. MAINTAINING AND UPDATING YOUR ACCOUNT INFORMATION
        </div>
        <div>
          As part of your use of the Services, you are responsible for
          maintaining and updating, as applicable, your Account Information with
          current and complete information. You may edit and delete portions of
          your Account Information. To do this, select “My Account” in the main
          menu and choose which information to edit or delete. You can also
          delete your Punch Games account entirely. To do this, select
          “Help/Customer Service” in the main menu. Further select “Account
          Inquiry” and request for your account to be deleted.
        </div>
        <div>
          After receiving any requested changes to your Account Information or
          Personal Information, we will make reasonable efforts to ensure that
          all of your Personal Information stored in databases we actively use
          to operate the Services will be updated, corrected, changed, or
          deleted as appropriate, as soon as reasonably practicable. However, we
          reserve the right to retain in our archival files any information we
          remove from or change in our active databases, subject to any
          obligations under any applicable law. Where permissible, we may retain
          such information to resolve disputes, troubleshoot problems, and
          enforce our Terms of Service. In addition, it may not be
          technologically possible to remove every record of the information you
          have previously provided us, as a copy may exist in a non-erasable
          form that will be difficult or impossible for us to locate.
        </div>
        <div className={styles.pram}>11. Cookie Policy</div>
        <div>
          By simply visiting the Website/applications, you do not provide any
          personal information, nor are you obliged to do so. We will only use
          data storage and retrieval devices ("Cookies") when you have given
          your prior consent to do so, as indicated in the user's browser pop-up
          window when you first access the Website/the Applications, and under
          the other terms and conditions set out in the Company's Cookie Policy,
          of which you should be aware.
        </div>
        <div>
          11.1 A cookie is a file that is downloaded on your computer when you
          access certain websites. Cookies allow a website, among other things,
          to store and retrieve information about the browsing habits of a user
          or his/her computer and, depending on the information they contain and
          the way he/she uses his/her computer, they can be used to recognize
          the user. The user's browser stores cookies on the hard disk only
          during the current session, occupying a minimum amount of memory space
          and not harming the computer. Cookies do not contain any specific
          personal information, and most of them are deleted from the hard drive
          at the end of the browser session (so-called session cookies). Most
          browsers accept cookies as standard and, regardless of the browser,
          allow or prevent temporary or stored cookies in the security settings.
        </div>
        <div>
          11.2 The types of cookies does this Website/Application use.Technical
          cookies: These allow access to restricted areas or the sharing of
          content through social networks. Personalization cookies: These are
          those that allow the user to access the service with some general
          characteristics predefined according to a series of criteria in the
          user's terminal, such as the language, the type of browser used to
          access the service, etc. Cookies for analysis: Those which, whether
          processed by us or by third parties, allow us to quantify the number
          of users and, thus, measure and carry out a statistical analysis of
          people's use of the service provided. To do this, browsing habits on
          our website are analyzed in order to enhance the products and services
          that we offer. Third party cookies: The Website/Applications may use
          third party services that, on behalf of the Company, will collect
          information for statistical purposes, user usage of the
          Website/Applications and for the provision of other services related
          to the activity of the Website/Applications and other Internet
          services. In particular, this website uses: Own site cookies
          Third-party cookies By using this Website/the Applications, the User
          expressly accepts the processing of the information collected in the
          manner and for the purposes mentioned above. He/she also acknowledges
          the possibility of rejecting the processing of such data or
          information by rejecting the use of cookies by selecting the
          appropriate configuration for this purpose in his/her browser.
          Although this option to block cookies in your browser may not allow 
          you to fully use all the functionalities of the Website/Applications.
          You can allow, block or delete cookies installed on your computer by
          configuring your browser options: Chrome,Explorer,,Firefox,Safari.
        </div>
        <div className={styles.pram}>
          11. GOVERNING LAW; NOTIFICATION OF CHANGES
        </div>
        <div>
          This Privacy Policy is governed by the laws of California without
          giving effect to any principles of conflict of law. Notification of
          changes to this Privacy Policy will be handled as described within
          “Section 13, Effective Date; Policy Changes” as provided below.
        </div>
        <div className={styles.pram}>12. CALIFORNIA PRIVACY RIGHTS</div>
        <div>
          Pursuant to Section 1798.83 of the California Civil Code, residents of
          California have the right to request from a business, with whom the
          California resident has an established business relationship, certain
          information with respect to the types of Personal Information the
          business shares with third parties for direct marketing purposes by
          such a third party and the identities of the third parties with whom
          the business has shared such information during the immediately
          preceding calendar year. If you are a California resident and want a
          copy of this notice, please submit an email request to
          contact@punch.games. In your request, please specify that you want a
          “Your Punch Games Section 1798.83 California Privacy Rights Notice.”
          Please allow 30 days for a response.
        </div>
        <div>
          California Consumer Privacy Act Rights. Under the California Consumer
          Privacy Act (“CCPA”), California residents have certain rights
          regarding their Personal Information. If you would like to exercise
          these rights on or after January 1, 2020, please contact us using the
          email address, toll-free phone number, or physical mailing address
          listed within the “Contact Information” section below. For your own
          privacy and security, at our discretion, we may require you to prove
          your identity before providing the requested information, as provided
          for by the CCPA. It may take us some time to respond to your request,
          but we will do so within the requirements of the CCPA.
        </div>
        <div>
          This Policy provides you disclosure regarding the Personal Information
          we collect from you and the purposes for doing so. Please see
          “Categories of Information We Collect” above. The CCPA grants you
          specific rights, including the following:
        </div>
        <div>
          12.1 Right to request disclosure as to Personal Information we have
          collected about you.
        </div>
        <div>
          12.1.1 Upon a verifiable request, made through one of the methods
          provided within the “Contact Information” section below, we will
          disclose to you the items listed below, one or more of which may be
          provided by reference to this Policy:
        </div>
        <div>
          The categories of Personal Information Punch Games has collected about
          you.
        </div>
        <div>
          The categories of sources from which the Personal Information was
          collected.
        </div>
        <div>
          The business purpose behind collecting the Personal Information.
        </div>
        <div>
          The categories of third parties with whom Punch Games has shared the
          information.
        </div>
        <div>
          The specific pieces of Personal Information Punch Games has collected
          about you.
        </div>
        <div>
          12.1.2 Right to opt out of the sale of your information. To exercise
          this right, please visit https://www.punch.games/.
        </div>
        <div>
          12.1.3 Right to request deletion: upon a verifiable request, made
          through one of the methods provided within the “CCPA Contact
          Information” section below, we will delete personal information we
          have regarding you and direct our service providers to delete your
          personal information from their records, to the extent provided by the
          CCPA.
        </div>
        <div>
          Right to be free from discrimination: Punch Games will not
          discriminate against you for exercising any of your rights under the
          CCPA.
        </div>
        <div>CCPA Contact Information:</div>
        <div>Punch Games can be reached by email at contact@punch.games.</div>
        <div>What We May Need From You</div>
        <div>
          We may need to request specific information from you to help us
          confirm your identity and ensure your right to access your personal
          data (or to exercise any of your other rights). This is a security
          measure to ensure that personal data is not disclosed to any person
          who has no right to receive it. We may also contact you to ask you for
          further information in relation to your request to speed up our
          response.
        </div>
        <div>
          Time Limit to Respond We will respond to all legitimate requests
          within forty-five days, or as permitted by the CCPA.
        </div>
        <div className={styles.pram}>13. EFFECTIVE DATE; POLICY CHANGES</div>
        <div>
          Each time you use the Punch Games SDK, the current version of the
          Privacy Policy will apply. Accordingly, when you use the Punch Games
          SDK, you should check the date of this Privacy Policy (which appears
          at the top of the Privacy Policy) and review any changes since the
          last version. Our business changes frequently and this Privacy Policy
          is subject to change from time to time. Unless stated otherwise, our
          current Privacy Policy applies to all information that we have about
          you. We will not materially change our policies and practices to make
          them less protective of customer information collected in the past
          without the consent of affected customers.
        </div>
        <div className={styles.pram}>CONTACT US</div>
        <div>
          To contact us with your questions or comments regarding this Privacy
          Policy or the information collection and dissemination practices of
          the Punch Games SDK, please email us at contact@punch.games.
        </div>
      </div>
    );
  }
}
